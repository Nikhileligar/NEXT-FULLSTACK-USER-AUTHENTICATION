"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../css/signup.css";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Profile = () => {
  const router = useRouter();
  const [data, setData] = React.useState('nothing');
  const [newName, setNewName] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const userDetails = async () => {
    try {
      const user = await axios.get('/api/users/me');
      return setData(user.data.data.name);
    } catch (error) {
      console.error(error);
    }
  };

  const onEdit = async (e: any) => {
    try {
      e.preventDefault();
      const updateDetails = await axios.patch('/api/users/update', { name: newName });
      window.alert('profile updated successfully');
      router.push('/home');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    userDetails();
  }, []);

  return (
    <div className="flex">
      <div className="UX-center-container">
        <div className='ux-components'>
          <form>
            <label>
              <p className='signup-heading'>
                 {data}
              </p>
            </label>
            <input
              type="text"
              placeholder="Edit Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <button onClick={onEdit} className='submit-button'>
              Edit Details
            </button>
            <button className='submit-button'>
              <Link href="/home"> back </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
