import { useState } from "react";

const Demo = () => {

    const firstName = 'Sonu';

    // create state object in this way 
    const [salary, setSalary] = useState(100); // number 

    const [lastName, updateLastName] = useState(''); // string 
    const [isMarried, setIsMarried] = useState(false); // boolean 
    const [address, setAddress] = useState({}); // object 
    const [phones, setPhones] = useState([]); // array 
    const [empData, setEmpData] = useState({});

    const increaseSalary = () => {
        setSalary(salary + 1);
        console.log(salary);
    };

    return (
        <div>
            <h1>Demo component</h1>
            <p>This is demo component.</p>
            <p>{firstName}</p>
            <p>{salary}</p>
            <p> {isMarried} </p>
            <div>
                <button onClick={increaseSalary}>Click Here</button>
            </div>
        </div>
    );
};

export default Demo;


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