"use client"
import Link from 'next/link';
import '../css/signup.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {useRouter} from 'next/navigation';
const HomePage = () => {
  const router = useRouter();
  const [name, setName] = useState<string | null>(null);
  useEffect(() => {
    if (localStorage.getItem('userName')) {
     const username = localStorage.getItem('userName');
     setName(username)
    }
  },[]);

  const onSignOut = async () => {
    try {
        const response = await axios.get("/api/users/signout");
        console.log(response);
        router.push("/login");
    } catch (err: any) {
        console.log(err);
    }
}

  const onProfile = async () => {
      try {
          const response = await axios.get("/api/users/getUsers");
          console.log(response);
          
      } catch (err) {
          console.log(err);
          // toast.error(err.message);
      }
  }
  return (
    <div className="flex">
      <div className="ux-home-container">
        <h1 className = 'signup-heading' >Hi! {name}</h1>
        {/* <button className='submit-button-right-navbar'>
          signout
        </button> */}
        <button 
        type="button"
        onClick={onSignOut} 
        className = "absolute top-5 right-0 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Sign out</button>
      <div className="left-sidebar">
            <Link href="/profile" onClick={onProfile}>
                    <i className="user-circle"></i> Profile
            </Link>
            <Link href="/compose-email">
                    <i className="user-circle"></i> Send Email
            </Link>
        </div>
        <div className="center-container">
          {/* Content for the center container */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
