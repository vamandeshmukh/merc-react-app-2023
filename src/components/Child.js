
const Child = (props) => {

    console.log(props);
    console.log(props.children);

    return (
        <div>
            <h1>Child Component</h1>
            <p>Child</p>
        </div>
    );

};

export default Child;