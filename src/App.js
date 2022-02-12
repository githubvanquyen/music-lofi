import React,{ useContext }from 'react';
import { Outlet } from 'react-router';
import Home from './components/Home/Home';
import { Route, Routes, BrowserRouter, Navigate} from'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AuthContextProvider from './Provider/AuthContext';
import { authContext } from './Provider/AuthContext';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';

function App() {
  const {auth:{isAuthenticated}} = useContext(authContext);
  return (
  <BrowserRouter>
    <Routes>
        <Route path='/login' element={<PrivateRoutes><Login/></PrivateRoutes>}/>
        <Route path='/register' element={<PrivateRoutes><Register/></PrivateRoutes>}/>
        <Route path='/' element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>
    </Routes>
  </BrowserRouter>
    
  )
}

export default App;
