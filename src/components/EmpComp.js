import { useEffect, useState } from "react";
import EmpList from "./EmpList";

const EmpComp = () => {

    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // using fetch API from JavaScript 

    const [emp, setEmp] = useState({});
    const [eidToSearch, setEidToSearch] = useState({});

    useEffect(() => { });

    const handleEmployeeId = (evt) => {
        console.log(evt.target.value);
        setEidToSearch(evt.target.value);
    };

    const findEmployeeById = (evt) => {
        console.log(emp);
        fetch(`${apiUrl}/${eidToSearch}`)
            .then((res) => { return res.json(); })
            .then((resp) => {
                console.log(resp);
                setEmp(resp);
                setEidToSearch('');
            })
            .catch((err) => { console.log(err); });
        evt.preventDefault();
    };

    return (
        <div>
            <h1>Employee Component</h1>
            <div>
                <p>Find Employee by Id</p>
                <form onSubmit={findEmployeeById}>
                    <input type="number" name="eidToSearch"
                        value={eidToSearch} onChange={handleEmployeeId}
                        placeholder="Employee id" required />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <p>Employee Data</p>
                <div>
                    {emp.id &&
                        <div>
                            <p>Name: {emp.name}</p>
                            <p>Username: {emp.username}</p>
                            <div>
                                <p>Address:</p>
                                <p>Street: {emp.address.street}</p>
                                <p>Suite: {emp.address.suite}</p>
                                <p>City: {emp.address.city}</p>
                                <p>Zipcode: {emp.address.zipcode}</p>
                                <div>
                                    <p>Location:</p>
                                    <p>Lattitude: {emp.address.geo.lat}</p>
                                    <p>Longitude: {emp.address.geo.lng}</p>
                                </div>
                            </div>
                            <p>Email: {emp.phone}</p>
                            <p>Website: {emp.website}</p>
                            <div>
                                <p>Company:</p>
                                <p>Name: {emp.company.name}</p>
                                <p>Catchphrase: {emp.company.catchPhrase}</p>
                                <p>BS: {emp.company.bs}</p>
                            </div>
                        </div>
                    }
                </div>
                <div>
                </div>
            </div>
            <EmpList />
        </div>
    );
};

export default EmpComp;



