import { useState } from "react";

const UpdateProfile = ({ profile }) => {

    const [updatedProfile, setUpdatedProfile] = useState(profile);

    const handleUpdateProfile = (evt) => { };

    const submitUpdateProfile = (evt) => { };

    return (
        <div>
            <form onSubmit={submitUpdateProfile}>
                <input type="text" value={updatedProfile.name} onChange={handleUpdateProfile} />
                <input type="submit" value="Save" />
            </form>
        </div>
    );

};