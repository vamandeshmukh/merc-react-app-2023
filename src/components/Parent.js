import { useState } from 'react';
import Child from './Child';

const Parent = () => {

    const parentData = 'Sonu';
    const [childDataInParent, setChildDataInParent] = useState('');

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Parent data in parent: {parentData}</p>
            <p>Child data in parent: {childDataInParent}</p>
            {/* <Child /> */}
            {/* <Child>{parentData}</Child> */}
            <Child passDataToChild={parentData} />
        </div>
    );

};

export default Parent;