import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/login/Login'));
const NewBook = lazy(() => import('./pages/Showbook/NewBook'));

const App: React.FC = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', margin: 0, padding: 0 }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/NewBook" element={<NewBook />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
