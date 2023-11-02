"use client";

import { useRouter } from "next/navigation";
// import {axios} from "axios";
import Link from "next/link";
import React from "react";
import "../css/signup.css"

const LoginPage = () => {
    const [user, setUser] = React.useState({
        email:"",
        password:""
    })
    const onSignIn = async () => {
        <h1>signed up successfully</h1>
    }
    return (
        <div className="flex">
            <div className="UX-center-container">
                <div className="ux-components">
                    <h1 className="signup-heading">Log In</h1>
                        <div className="email-component">
                            <input type="text" id="email" placeholder="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
                        </div>
                        <div className="password-component">
                            <input type="password" id="password" placeholder="password" value={user.email} onChange={(e) => setUser({...user, password: e.target.value})} />
                        </div>
                        <div className="UX-button-container">
                            <button className="submit-button" onChange={onSignIn}>
                                sign in
                            </button>
                            <Link href="/signup"> new user? click here </Link>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;