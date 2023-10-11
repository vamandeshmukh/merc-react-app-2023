import { useState } from 'react';
import Child from './Child';

const Parent = () => {

    const parentData = 'Sonu';
    const [childDataInParent, setChildDataInParent] = useState('');

    const receiveDataFromChild = (arg) => {
        console.log(arg);
        setChildDataInParent(arg);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Parent data in parent: {parentData}</p>
            <p>Child data in parent: {childDataInParent}</p>
            {/* <Child /> */}
            {/* <Child>{parentData}</Child> */}
            {/* <Child passDataToChild={parentData} /> */}
            {/* <Child passDataToParent={receiveDataFromChild} /> */}
            <Child passDataToChild={parentData} passDataToParent={receiveDataFromChild} />
        </div>
    );
};

export default Parent;