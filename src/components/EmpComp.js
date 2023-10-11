import { useEffect, useState } from "react";

const EmpComp = () => {

    // fetch 
    // axios 

    const [emp, setEmp] = useState({});

    useEffect(() => { });

    const findEmployeeById = () => {
        // fetch
     };

    return (
        <div>
            <h1>Employee Component</h1>
            <div>
                <p>Find Employee by Id</p>
                <input type="number" name="id" placeholder="Employee id" required />
                <input type="button" onClick={findEmployeeById} value="Submit" />
            </div>
            <div>
                <p>Employee Data</p>
                <p>Name: </p>
            </div>
        </div>
    );
};

export default EmpComp; 
