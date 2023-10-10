import { useEffect, useState } from "react";

const Demo = () => {

    const [empData, setEmpData] = useState({
        eid: 101,
        firstName: 'Sonu',
        salary: 100,
        isMarried: false
    });

    // useEffect();

    const increaseSalary = () => {
        setEmpData({
            ...empData,
            salary: empData.salary + 1,
        });
        console.log(empData.salary);
    };

    return (
        <div>
            <h1>Demo component</h1>
            <p>This is demo component.</p>
            <p>{empData.firstName}</p>
            <p>{empData.salary}</p>
            <button onClick={increaseSalary}>Click Here</button>
        </div>
    );
};

export default Demo;

// import { useState } from "react";

// const Demo = () => {

//     const firstName = 'Sonu';

//     // create state object in this way
//     const [salary, setSalary] = useState(100); // number

//     const [lastName, updateLastName] = useState(''); // string
//     const [isMarried, setIsMarried] = useState(false); // boolean
//     const [address, setAddress] = useState({}); // object
//     const [phones, setPhones] = useState([]); // array
//     const [empData, setEmpData] = useState({});

//     const increaseSalary = () => {
//         setSalary(salary + 1);
//         console.log(salary);
//     };
//     const changeStatus = () => {
//         setIsMarried(!isMarried);
//     };

//     return (
//         <div>
//             <h1>Demo component</h1>
//             <p>This is demo component.</p>
//             <p>{firstName}</p>
//             <p>{salary}</p>
//             <button onClick={increaseSalary}>Click Here</button>
//             {/* show salary id isMarried  */}
//             <br />
//             <button onClick={changeStatus}>Change Status</button>
//             <p> {isMarried && salary} </p>
//         </div>
//     );
// };

// export default Demo;


// const Demo = () => {

//     const firstName = 'Sonu';
//     let salary = 100;

//     const increaseSalary = () => {
//         salary++;
//         console.log(salary);
//     };

//     return (
//         <div>
//             <h1>Demo component</h1>
//             <p>This is demo component.</p>
//             <p>{firstName}</p>
//             <p>{salary}</p>
//             <div>
//                 <button onClick={increaseSalary}>Click Here</button>
//             </div>
//         </div>
//     );
// };

// export default Demo;