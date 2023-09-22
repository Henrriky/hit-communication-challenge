import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import LoginTeste from '../pages/LoginTeste';
import LoginTesteCallback from '../pages/LoginTesteCallback';
import Calls from '../pages/Calls';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';

function ApplicationRoutes() {
    return (
            <Routes>
                {/* <Route path="/" element={<Login/>} /> */}
                <Route path="/" element={<LoginTeste/>} />
                <Route path="/callback" element={<LoginTesteCallback/>} />
                <Route path="/calls" element={<PrivateRoute element={<Calls/>}/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
    )
}

export default ApplicationRoutes