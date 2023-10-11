import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo from "./components/Demo";
import Home from "./components/Home";
import Page404 from "./components/Page404";
import Parent from "./components/Parent";

const AppRoutes = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="demo" element={<Demo />} />
                    <Route path="parent" element={<Parent />} />
                    <Route path="" element={<Home />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default AppRoutes; 