import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Calls from '../pages/Calls';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';

function ApplicationRoutes() {
    return (
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/calls" element={<PrivateRoute element={<Calls/>}/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
    )
}

export default ApplicationRoutes