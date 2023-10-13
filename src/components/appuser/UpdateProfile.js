import { useState } from "react";

const UpdateProfile = (props) => {

    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('currentProfile')));

    const handleUpdateProfile = (evt) => {
        console.log(evt.target);
        setProfile({
            ...profile,
            [evt.target.name]: evt.target.value
        });
    };

    const submitUpdateProfile = (evt) => {
        evt.preventDefault();
        console.log(profile);
        localStorage.removeItem('currentProfile');
        localStorage.setItem('currentProfile', JSON.stringify(profile));
        props.updatePro(profile);
    };

    return (
        <div>
            <h1>Update Profile</h1>
            <form onSubmit={submitUpdateProfile}>
                <label for="">Name </label>
                <input type="text" name="name" value={profile.name} onChange={handleUpdateProfile} />
                <br />
                <label for="">Username </label>
                <input type="text" name="username" value={profile.username} onChange={handleUpdateProfile} readOnly />
                <br />
                <label for="">Email </label>
                <input type="email" name="email" value={profile.email} onChange={handleUpdateProfile} />
                <br />
                <label for="">Phone </label>
                <input type="tel" name="phone" value={profile.phone} onChange={handleUpdateProfile} />
                <br />
                <label for="">Website </label>
                <input type="text" name="website" value={profile.website} onChange={handleUpdateProfile} />
                <br />
                <label for="">Password </label>
                <input type="password" name="password" value={profile.password} onChange={handleUpdateProfile} />
                <br />
                {/* <input type="file" name="avatar" value={profile.avatar} onChange={handleUpdateProfile} />
                <br /> */}
                <input type="submit" value="Save profile" />
            </form>
        </div>
    );

};

export default UpdateProfile;






