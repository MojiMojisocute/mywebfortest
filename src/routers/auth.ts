import { Router, Request, Response, NextFunction } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { db } from "@/db";
import { User, users } from "@/db/schema";
import { getConfig } from "@/config";
import { eq } from "drizzle-orm";

export const SALT = 8;

export const isAuthenticated = passport.authenticate("jwt", { session: false });

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if ((req.user as User).role !== "admin") {
    return res.status(401).send("Unauthorized");
  }
  next();
};

export default class Authentication {
  router = Router();

  constructor() {
    this.register();
  }

  register() {
    this.router.post("/register", this.registerLocalAccount.bind(this));
    this.router.post("/login", this.login.bind(this));
    this.router.get("/google", passport.authenticate("google", { scope: ["email"], session: false }));
    this.router.get("/google/callback", this.googleCallback.bind(this));
    this.router.get("/set-password", isAuthenticated, this.setPassword.bind(this));
    this.router.get("/set-role", isAuthenticated, isAdmin, this.setRole.bind(this));
  }

  async registerLocalAccount(req: Request, res: Response) {
    const { email, password } = req.body as { email: string; password: string };

    try {
      const existingUser = await db.query.users.findFirst({ where: eq(users.email, email) });
      if (existingUser) return res.status(400).json({ message: "This email is already registered" });

      const hashed = await bcrypt.hash(password, SALT);
      const [user] = await db.insert(users).values({ email, password: hashed, role: "regular" }).returning();
      if (!user) return res.status(201).end();

      res.json({ token: newJwt(user) });
    } catch (err: any) {
      res.status(500).json({ message: err.message || "An error occurred" });
    }
  }

  login(req: Request, res: Response, next: NextFunction) {
    passport.authenticate("local", { session: false }, (err, user, info) => {
      if (err || !user) {
        const message = err?.message || info?.message || "Authentication failed";
        return res.status(400).json({ message });
      }
      res.json({ token: newJwt(user) });
    })(req, res, next);
  }

  googleCallback(req: Request, res: Response, next: NextFunction) {
    passport.authenticate("google", { session: false }, (err, user, info) => {
      if (err || !user) {
        const message = err?.message || info?.message || "Authentication failed";
        return res.status(400).json({ message });
      }
      res.json({ token: newJwt(user) });
    })(req, res, next);
  }

  async setPassword(req: Request, res: Response) {
    const { id } = req.user as User;
    const { password } = req.body;

    if (!password) return res.status(400).json({ message: "Password is required" });

    try {
      const hashedPassword = await bcrypt.hash(password, SALT);
      await db.update(users).set({ password: hashedPassword }).where(eq(users.id, id));
      res.status(200).json({ message: "Password updated successfully" });
    } catch (err) {
      res.status(500).json({ message: "Failed to update password" });
    }
  }

  async setRole(req: Request, res: Response) {
    const userId = parseInt(req.params.userId, 10);
    const { role } = req.body;

    if (!role || !['regular', 'admin'].includes(role)) return res.status(400).json({ message: "Invalid role" });

    try {
      await db.update(users).set({ role }).where(eq(users.id, userId));
      res.status(200).json({ role });
    } catch (err) {
      res.status(500).json({ message: "Failed to update role" });
    }
  }
}

function newJwt(user: User) {
  return jwt.sign({ id: user.id, role: user.role }, getConfig().jwtSecret, { expiresIn: "1y" });
}
