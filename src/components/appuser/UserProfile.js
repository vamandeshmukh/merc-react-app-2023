import { useEffect, useState } from "react";
import AppUser from "../../models/AppUser";

const UserProfile = () => {

    const [profile, setProfile] = useState(new AppUser());

    useEffect(() => {
        console.log(profile);
        setProfile(new AppUser());
    }, [profile]);


    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {profile.name}</p>
            <p>Username: {profile.username}</p>
            <p>phone: {profile.phone}</p>
            <p>Email: {profile.email}</p>
            <p>Password: {profile.password}</p>
            <p>Avatar:</p>
            <img src={user.avatar} alt="Avatar" />
            <p>Edit Profile</p>
        </div>
    );
}

export default UserProfile;