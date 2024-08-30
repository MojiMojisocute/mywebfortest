import './loginpage.css';

function LoginPage() {
    return (
        <div className="container" id="main">
            <div className="sign-up">
                <form action="#">
                    <h1>สร้างบัญชีใหม่</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    </div>
                    <p>หรือสมัครสมาชิกด้วย Email</p>
                    <input type="text" name="txt" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button>สร้างบัญชี</button>
                </form>
            </div>

            <div className="sign-in">
                <form action="#">
                    <h1>หรือเข้าสู่ระบบด้วย Email ของคุณ</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    </div>
                    <p>เข้าสู่ระบบด้วย Email ของคุณ</p>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <a href="#">ลืมรหัสผ่าน</a>
                    <button>เข้าสู่ระบบ</button>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-left">
                        <h1>ยินดีต้อนรับกลับนะเพื่อน</h1>
                        <p>info</p>
                        <button id="signIn">สร้างบัญชีใหม่</button>
                    </div>
                    <div className="overlay-right">
                        <h1>สวัสดีเพื่อน</h1>
                        <p>info</p>
                        <button id="signUp">เข้าสู่ระบบ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
