import { useState } from "react";
const DemoForm = () => {
    const [demoData, setDemoData] = useState({
        username: '',
        password: ''
    });
    const handleUserData = (evt) => {
        console.log(evt.target.value);
        console.log(evt.target.value);
        setDemoData({
            ...demoData,
            [evt.target.name]: evt.target.value
        });
    };
    const submitUserData = (evt) => {
        console.log(evt);
        alert(`Hi ${demoData.username}!`);
        evt.preventDefault();
        setDemoData({username: '', password: ''});
    };
    return (
        <div>
            <h1>Demo Form</h1>
            <p>Form is used to capture user inputs.</p>
            <div>
                <form onSubmit={submitUserData}>
                    <input type="text" name="username" 
                    value={demoData.username} onChange={handleUserData} />
                    <br />
                    <input type="password" name="password" 
                    value={demoData.password} onChange={handleUserData} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <p>Data as entered</p>
                <p>Username: {demoData.username}</p>
                <p>Password: {demoData.password}</p>
            </div>
        </div>
    );
};

export default DemoForm;