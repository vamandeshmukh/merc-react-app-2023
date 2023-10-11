import { Link } from "react-router-dom";

const Toolbar = () => {

    return (
        <div>
            <Link to="home">Home</Link>
            <Link to="emp">Employee</Link>
            <Link to="Demo">Demo</Link>
            <Link to="parent">Parent</Link>
        </div>
    );
};

export default Toolbar; 
