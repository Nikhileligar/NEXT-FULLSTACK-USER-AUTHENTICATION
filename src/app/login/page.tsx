"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import React from "react";
import "../css/signup.css"
import {useEffect, useState} from "react"

const LoginPage = () => {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email:"",
        password:""
    });
    // admin user 
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState(false);
    
    const [loading, setLoading] = React.useState(false);
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 8) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    })
    const onSignIn = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login",user);
            const name = response.data.name;
            localStorage.setItem('userName',name);
            console.log(response.data);
            router.push("/home");
        } catch (err: any) {
            console.log("error in logging in ", err)
            // toast.error(error.message);
        } finally {
            setLoading(false);
    }
}

    const adminUser = () => {

    }
    return (
        <div className="flex">
            <div className="UX-center-container">
                <div className="ux-components">
                    <h1 className="signup-heading">{loading ? "processing" : "sign in"}</h1>
                        <div className="email-component">
                            <input type="text" id="email" placeholder="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
                        </div>
                        <div className="password-component">
                            <input type="password" id="password" placeholder="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} />
                        </div>
                        <label>
                            <div className="radio-flex">
                                <div>
                                <input type="radio" name="adminOption" value="admin" checked={isAdmin} onChange={() => setIsAdmin(true)} />
                                Admin
                                </div>
                                <div>
                                <input type="radio" name="adminOption" value="user" checked={isAdmin} onChange={() => setIsUser(false)} />
                                User
                            </div>
                        </div>
                        </label>
                        <div className="UX-button-container">
                            <button className="submit-button" onClick={onSignIn}>
                                {buttonDisabled ? 'cant signIn' : 'sign in'}
                            </button>

                            <Link href="/signup"> new user? click here </Link>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;