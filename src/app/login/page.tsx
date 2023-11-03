"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import React from "react";
import "../css/signup.css"
import router from "next/router";
import toast from "react-hot-toast";
import {useEffect, useState} from "react"
import { NextResponse } from "next/server";

const LoginPage = () => {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email:"",
        password:""
    });
    
    const [loading, setLoading] = React.useState(false);
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
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
            console.log(response.data);
            router.push("/home",name);
        } catch (err: any) {
            console.log("error in logging in ", err)
            // toast.error(error.message);
        } finally {
            setLoading(false);
    }
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
                        <div className="UX-button-container">
                            <button className="submit-button" onClick={onSignIn}>
                                {buttonDisabled ? 'cant signIn' : 'signIn'}
                            </button>

                            <Link href="/signup"> new user? click here </Link>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;