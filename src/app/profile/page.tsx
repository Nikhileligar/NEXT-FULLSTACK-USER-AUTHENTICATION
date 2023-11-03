"use client"

import axios from 'axios'
import '../../app/css/signup.css'
import { useRouter } from "next/navigation";
const Profile = () => {
    const router = useRouter();
    const onSignOut = async () => {
        try {
            const response = await axios.get("/api/users/signout");
            console.log(response);
            router.push("/login");
        } catch (err: any) {
            console.log(err);
        }
    }
    return (
    <div className="flex">
        <div className="submit-buttonn">
            {/* <h1>profile</h1>
            <hr/> */}
            <button onClick={onSignOut}>sign out</button>
        </div>
    </div>
    )
}

export default Profile;