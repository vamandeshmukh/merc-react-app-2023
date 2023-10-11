import axios from "axios";
import { useEffect, useState } from "react";

const EmpList = () => {

    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const [allEmpList, setAllEmpList] = useState([]);

    useEffect(() => {
        axios.get(apiUrl)
            .then((resp) => {
                console.log(resp.data);
                setAllEmpList(resp.data); // imp 
            })
            .catch((err) => { console.log(err); })
    }, []);

    return (
        <div>
            <h1>List of All Employees</h1>
            {
                allEmpList.map((emp, k) => {
                    return <p obj={emp} key={k}> {emp.name} </p>
                })
            }
        </div>
    );
};

export default EmpList; 
