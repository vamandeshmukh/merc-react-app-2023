import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo from "./components/demo/Demo";
import Home from "./components/common/Home";
import Page404 from "./components/common/Page404";
import Parent from "./components/demo/Parent";
import Toolbar from "./components/common/Toolbar";
import Footer from './components/common/Footer';
import EmpComp from "./components/emp/EmpComp";
import EmpList from "./components/emp/EmpList";
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
                    <Route path="emplist" element={<EmpList />} />
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
