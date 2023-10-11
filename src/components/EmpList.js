import axios from "axios";
import { useEffect, useState } from "react";

const EmpList = () => {

    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const [allEmpList, setAllEmpList] = useState([]);

    useEffect(() => {
        axios.get(apiUrl)
            .then((resp) => {
                console.log(resp);
                setAllEmpList(resp);
            })
            .catch((err) => { console.log(err); })

    }, []);

    return (
        <div>
            <h1>List of all Employees</h1>
            {
                allEmpList &&
                <div>
                    <p>{allEmpList[0].name}</p>
                    <p>{allEmpList[1].name}</p>
                    <p>{allEmpList[2].name}</p>
                    <p>Render all emps using loop</p>
                </div>
            }


        </div>
    );
};

export default EmpList; 
