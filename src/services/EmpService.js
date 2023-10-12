import axios from "axios";

const empUrl = 'https://jsonplaceholder.typicode.com/users';

const getAllEmps = () => {
    console.log('getAllEmps');
    return axios.get(empUrl);
};

const getEmpById = (eid) => {
    console.log(eid);
    return fetch(`${empUrl}/${eid}`);
};

export { getAllEmps, getEmpById };