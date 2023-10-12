import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo from "./components/demo/Demo";
import Home from "./components/common/Home";
import Page404 from "./components/common/Page404";
import Parent from "./components/demo/Parent";
import Toolbar from "./components/common/Toolbar";
import Footer from './components/common/Footer';
import EmpComp from "./components/emp/EmpComp";
import EmpList from "./components/emp/EmpList";
import Register from "./components/appuser/Register";
import Login from "./components/appuser/Login";
import Logout from "./components/appuser/Logout";
import UserProfile from "./components/appuser/UserProfile";
import { useEffect, useState } from "react";

const AppRoutes = () => {


    return (
        <div>
            <BrowserRouter>
                <div>
                    <Toolbar />
                </div>
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route exact path="" element={<Home />} />
                    <Route path="*" element={<Page404 />} />
                    <Route path="home" element={<Home />} />
                    <Route path="demo" element={<Demo />} />
                    <Route path="emp" element={<EmpComp />} />
                    <Route path="emplist" element={<EmpList />} />
                    <Route path="parent" element={<Parent />} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="profile" element={<UserProfile />} />
                    <Route exact path="" element={<Home />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
                <div>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;












{/* <Route path="home" element={<Home />} />
<Route path="demo" element={<Demo />} />
<Route path="emp" element={<EmpComp />} />
<Route path="emplist" element={<EmpList />} />
<Route path="parent" element={<Parent />} />
<Route path="register" element={<Register />} />
<Route path="login" element={<Login />} />
<Route path="logout" element={<Logout />} />
<Route path="profile" element={<UserProfile />} />
<Route exact path="" element={<Home />} />
<Route path="*" element={<Page404 />} /> */}
