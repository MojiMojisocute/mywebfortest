import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './global.css'

import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/login/Login'));
const NewBook = lazy(() => import('./pages/Showbook/NewBook'));
const AllBook = lazy(() => import('./pages/Showbook/AllBook'));
const Payment = lazy(() => import('./pages/payment/Payment'));
const Setting = lazy(() => import('./pages/Setting/Setting'));


const App: React.FC = () => {
  const location = useLocation(); 

  useEffect(() => {
    document.body.style.overflow = '';
    document.body.style.height = '';
  }, [location.pathname]);

  return (
    <div style={{ width: '100%', minHeight: '100vh', margin: 0, padding: 0 }}>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/NewBook" element={<NewBook />} />
          <Route path="/AllBook" element={<AllBook />} />
          <Route path="/Payment" element={<Payment/>} />
          <Route path="/Setting" element={<Setting/>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;