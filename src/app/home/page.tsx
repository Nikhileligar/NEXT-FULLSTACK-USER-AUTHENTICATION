"use client"
import Link from 'next/link';
import '../css/signup.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
const HomePage = () => {
  const [name, setName] = useState<string | null>(null);
  useEffect(() => {
    console.log(localStorage.getItem('userName'));
    if (localStorage.getItem('userName')) {
     const username = localStorage.getItem('userName');
     setName(username)
    }
  },[])

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
        <h1 className = 'signup-heading' >welcome</h1>
        <h1 className='signup-heading'>{name}</h1>
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
