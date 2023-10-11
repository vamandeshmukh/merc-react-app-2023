import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo from "./components/Demo";
import Parent from "./components/Parent";

const AppRoutes = () => {

    return (
        <div>
            <h1>App Routes</h1>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="home" element={<Home />} /> */}
                    <Route path="demo" element={<Demo />} />
                    <Route path="parent" element={<Parent />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default AppRoutes; 
