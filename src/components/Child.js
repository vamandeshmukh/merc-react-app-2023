
const Child = (props) => {

    console.log(props);
    // console.log(props.children);

    const parentDataInChild = props.passDataToChild;

    return (
        <div>
            <h1>Child Component</h1>
            <p>Parent data in child: {parentDataInChild}</p>
        </div>
    );

};

export default Child;