import { useState } from "react";

const DemoForm = () => {

    const [demoData, setDemoData] = useState({
        username: '',
        password: ''
    });

    return (
        <div>
            <h1>Demo Form</h1>
            <p>Form is used to capture user inputs.</p>
            <div>
                <form>
                    <input type={'text'} value='' />
                </form>
            </div>
            <div>
                <p>Data as entered</p>
                <p>{demoData.username}</p>
                <p>{demoData.password}</p>
            </div>
        </div>
    );
};

export default DemoForm;