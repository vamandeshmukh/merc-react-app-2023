import { useSelector } from "react-redux";

const Home = () => {

    const cmp1 = useSelector(store => store.cmp1Data.cmp1State);

    return (
        <div>
            <h1>Home Component</h1>
            <p> {cmp1} </p>
        </div>
    );
};

export default Home; 
