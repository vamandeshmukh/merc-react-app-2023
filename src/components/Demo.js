// https://react.dev/learn

const Demo = () => {

    const firstName = 'Sonu';
    let salary = 100;

    const increaseSalary = () => {
        salary++;
        console.log(salary);
    };

    return (
        <div>
            <h1>Demo component</h1>
            <p>This is demo component.</p>
            <p>{firstName}</p>
            <p>{salary}</p>
            <div>
                <button onClick={increaseSalary}>Click Here</button>
            </div>
        </div>
    );

};

export default Demo;