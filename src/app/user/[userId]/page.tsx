"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import StatusUpdate from '@/components/statusUpdate';
import FriendManagement from '@/components/friendManagement';
import Feed from '@/components/feed';
import Navbar from '@/components/navbar';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const UserProfilePage: React.FC = () => {
  const { userId } = useParams();
  const userIDNum = parseInt(userId as string);
  const [filterUserId, setFilterUserId] = useState<number | null>(null);

  const user = useSelector((state: RootState) =>
    state.user.users.find((user) => user.id === userIDNum)
  );

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div style={{
      background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <Navbar />
      <div className="container" style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '20px' }}>
        <div className="row">
          <div className="col-md-4 text-center">
            <img src={user.profilePicture} alt={`${user.name}'s profile`} className="img-fluid rounded-circle mb-3" />
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' , fontSize:'35px'}}>{user.name}</h1>
            <p className="text-muted" style={{ fontFamily: 'Montserrat, sans-serif', fontSize:'18px' }}>"{user.statusMessage}"</p>
          </div>
          <div className="col-md-8">
            <div className="mb-4">
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize:'20px', fontWeight:'bold'}}>Update My Status</h3>
              <StatusUpdate userId={userIDNum} />
            </div>
            <div className="mb-4">
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize:'20px', fontWeight:'bold' }}>Manage Friends</h3>
              <FriendManagement userId={userIDNum} />
            </div>
            <div>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize:'20px', fontWeight:'bold' }}>My Feed</h3>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Filter by friend ID"
                onChange={(e) => {
                  const id = parseInt(e.target.value);
                  setFilterUserId(!isNaN(id) ? id : null);
                }}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              />
              <Feed userId={userIDNum} filterUserId={filterUserId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
