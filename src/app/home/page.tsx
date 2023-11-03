"use client"
import Link from 'next/link';
import '../css/signup.css'
import React, { useEffect, useState } from 'react';
const HomePage = () => {
  const [name, setName] = useState<string | null>(null);
  useEffect(() => {
    console.log(localStorage.getItem('userName'));
    if (localStorage.getItem('userName')) {
     const username = localStorage.getItem('userName');
     setName(username)
    }
  },[])
  return (
    <div className="flex">
      <div className="ux-home-container">
        <h1>welcome</h1>
        <h1>{name}</h1>
      <div className="left-sidebar">
            <Link href="/profile">
                    <i className="fas fa-user-circle"></i> Profile
            </Link>
            <Link href="/compose-email">
                    <i className="fas fa-envelope"></i> Send Email
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
