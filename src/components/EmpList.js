import { useEffect, useState } from "react";
import { getAllEmps } from "../services/EmpService";

const EmpList = () => {

    const [allEmpList, setAllEmpList] = useState([]);
    
    useEffect(() => {
        getAllEmps()
            .then((resp) => {
                console.log(resp.data);
                setAllEmpList(resp.data); // use response with 'data' 
            })
            .catch((err) => {
                // write proper code 
                console.log(err);
            })
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
