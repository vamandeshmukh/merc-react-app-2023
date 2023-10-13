import { useDispatch, useSelector } from "react-redux";
import { setCmp1State } from '../../redux/Comp1Slice';

const Comp1 = () => {

    // fetch sata from store 
    const cmp1 = useSelector(store => store.cmp1Data.cmp1State);
    const cmp2 = useSelector(store => store.cmp2Data.cmp2State);
    const userD = useSelector(store => store.userData.userState);

    const temp = 'Comp1 updated state';
    const dispatch = useDispatch();

    // send data to store 
    const sendDataToStore = () => {
        dispatch(setCmp1State(temp));
    };

    return (
        <div>
            <h1>Comp1</h1>
            <p>Comp1 data: {cmp1}</p>
            <p>Comp2 data: {cmp2}</p>
            <p>User data: {userD.username}</p>
            <button onClick={sendDataToStore}>Click</button>
        </div>
    );

};

export default Comp1;
