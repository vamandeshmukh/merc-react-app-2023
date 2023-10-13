import { useSelector } from "react-redux";

const Comp2 = () => {

    const cmp1 = useSelector(store => store.cmp1Data.cmp1State);
    const cmp2 = useSelector(store => store.cmp2Data.cmp2State);

    return (
        <div>
            <h1>Comp1</h1>
            <p>Comp1 data: {cmp1}</p>
            <p>Comp2 data: {cmp2}</p>
        </div>
    );

};

export default Comp2;
