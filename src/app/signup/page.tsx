"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import "../css/signup.css"
import toast from "react-hot-toast";
import axios from "axios";

const SignUpPage = () => {
    const router = useRouter();
    const [user, setUser] = React.useState({
        name:"",
        email:"",
        password:""
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const onSignUp = async () => {
        try {
            
            // const response = await fetch('/api/users/signup', {
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(user),
            //   });
            //   router.push('/login')
            
            setLoading(true);
            const response = await axios.post("/api/users/signup",user)
            console.log('resultt',response.data);
            router.push('/login');
        } catch(err: any) {
            toast.error(err.message)
            console.log(err)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user?.email?.length > 0 && user?.password?.length > 0 && user?.name?.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    })
    return (
        <div className="flex">
            <div className="UX-center-container">
                <div className="ux-components">
                    <h1 className="signup-heading">{loading ? "processing" : "signup"}</h1>
                        <div className="email-component">
                            <input type="text" id="email" placeholder="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
                        </div>
                        <div className="name-component">
                            <input type="text" id="name" placeholder="name" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}/>
                        </div>
                        <div className="password-component">
                            <input type="password" id="password" placeholder="password" value={user.password} onChange={(e) => setUser({...user,password: e.target.value})} />
                        </div>
                        <div className="UX-button-container">
                            <button className="submit-button" onClick={onSignUp}>
                                {buttonDisabled ? "no signup" : "Signup"}
                            </button>
                            <Link href="/login"> visit login page </Link>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;