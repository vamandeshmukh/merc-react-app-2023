import axios from "axios";
import { useEffect, useState } from "react";

const EmpList = () => {

    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const [allEmpList, setAllEmpList] = useState([]);

    useEffect(() => {
        axios.get(apiUrl)
            .then((resp) => {
                console.log(resp);
                setAllEmpList(resp.data); // imp 
            })
            .catch((err) => { console.log(err); })
    }, []);

    return (
        <div>
            <h1>List of All Employees</h1>
            {
                (allEmpList.length > 0) &&
                <div>
                    <p>{allEmpList[0].name}</p>
                    <p>Render all emps using loop</p>
                </div>
            }


        </div>
    );
};

export default EmpList; 
