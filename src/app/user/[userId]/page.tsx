"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import StatusUpdate from '@/components/statusUpdate';
import Feed from '@/components/feed';
import Navbar from '@/components/navbar';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { addFriend } from '@/redux/userSlice';
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image';

const UserProfilePage: React.FC = () => {
  const { userId } = useParams();
  const userIDNum = parseInt(userId as string);
  const [filterUserId, setFilterUserId] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [newFriendId, setNewFriendId] = useState<number | null>(null);

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) =>
    state.user.users.find((user) => user.id === userIDNum)
  );

  if (!user) {
    return <div>User not found</div>;
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleAddFriend = () => {
    if (newFriendId !== null && !user.friends.includes(newFriendId)) {
      dispatch(addFriend({ userId: userIDNum, friendId: newFriendId }));
      setNewFriendId(null); // Reset the input field
    } else {
      alert("Invalid or existing friend ID.");
    }
  };

  return (
    <div
      style={{
        background:
          'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <Navbar />
      <div className="container" style={{ maxWidth: '1200px', margin: 'auto' }}>
        <div className="row">
          {/* Left Section: Profile Info & Friend Management */}
          <div
            className="col-md-5"
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '20px',
              marginRight: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              maxHeight: '400px', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div className="text-center">
              <Image
                src={user.profilePicture }
                alt={`${user.name}'s profile`}
                className="img-fluid rounded-circle mb-3"
                width={120}
                height={120}
                style={{ objectFit: 'cover' }}
              />
              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 'bold',
                  fontSize: '24px',
                  marginBottom: '10px',
                }}
              >
                `${user.name} profile'
              </h2>
              <p
                className="text-muted"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '14px',
                  marginBottom: '20px',
                }}
              >
                &quot;{user.statusMessage}&quot;
              </p>

              <h4
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                }}
              >
              </h4>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="friendDropdown"
                  onClick={toggleDropdown}
                  style={{ width: '100%' }}
                >
                  Friends
                </button>
                <ul
                  className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}
                  aria-labelledby="friendDropdown"
                  style={{
                    display: dropdownOpen ? 'block' : 'none',
                    width: '100%',
                  }}
                >
                  {user.friends.length > 0 ? (
                    <>
                      {user.friends.map((friendId, index) => (
                        <li key={index}>
                          <a className="dropdown-item" href="#">
                            Friend ID: {friendId}
                          </a>
                        </li>
                      ))}
                    </>
                  ) : (
                    <li>
                      <p className="dropdown-item">No friends found.</p>
                    </li>
                  )}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <div className="dropdown-item">
                      <input
                        type="number"
                        placeholder="Enter friend ID"
                        className="form-control"
                        value={newFriendId || ''}
                        onChange={(e) =>
                          setNewFriendId(parseInt(e.target.value))
                        }
                      />
                      <button
                        className="btn btn-primary mt-2"
                        onClick={handleAddFriend}
                      >
                        Add Friend
                      </button>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Status Update Section */}
              <div className="mt-4">
                <h4
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                  }}
                >
                  Update Status
                </h4>
                {/* Render StatusUpdate component here */}
                <StatusUpdate userId={userIDNum} />
              </div>
            </div>
          </div>

          {/* Right Section: Feed & Filtering */}
          <div
            className="col-md-6"
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className="mb-4">
              <h4
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                }}
              >
                My Feed
              </h4>
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
              {/* Feed Component */}
              <Feed userId={userIDNum} filterUserId={filterUserId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
