import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo from "./components/Demo";
import Home from "./components/Home";
import Page404 from "./components/Page404";
import Parent from "./components/Parent";
import Toolbar from "./components/Toolbar";
import Footer from './components/Footer';
import EmpComp from "./components/EmpComp";
const AppRoutes = () => {

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Toolbar />
                </div>
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="demo" element={<Demo />} />
                    <Route path="emp" element={<EmpComp />} />
                    <Route path="parent" element={<Parent />} />
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
