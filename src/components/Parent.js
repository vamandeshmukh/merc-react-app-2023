import Child from './Child';

const Parent = () => {

    const parentData = 'Sonu';

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Parent</p>
            {/* <Child /> */}
            <Child>{parentData}</Child>
        </div>
    );

};

export default Parent;