import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFriend } from '@/redux/userSlice';
import { RootState } from '@/redux/store';

interface FriendManagementProps {
  userId: number;
}

const FriendManagement: React.FC<FriendManagementProps> = ({ userId }) => {
  const dispatch = useDispatch();
  const [friendId, setFriendId] = useState('');
  const userFriends = useSelector(
    (state: RootState) => state.user.users.find(user => user.id === userId)?.friends || []
  );

  const handleAddFriend = () => {
    const id = parseInt(friendId);
    if (!isNaN(id) && id !== userId && !userFriends.includes(id)) {
      dispatch(addFriend({ userId, friendId: id }));
      setFriendId(''); // Clear the input field after adding a friend
    }
  };

  return (
    <div>
      <ul className="list-group mb-3">
        {userFriends.map(friendId => (
          <li key={friendId} className="list-group-item" style={{ fontFamily: 'Montserrat, sans-serif' }}>Friend ID: {friendId}</li>
        ))}
      </ul>
      <div className="input-group">
        <input
          type="text"
          value={friendId}
          onChange={(e) => setFriendId(e.target.value)}
          placeholder="Enter friend ID"
          className="form-control"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        />
        <div className="input-group-append">
          <button onClick={handleAddFriend} className="btn btn-primary" style={{ backgroundColor: '#3897f0', borderColor: '#3897f0', fontFamily: 'Montserrat, sans-serif' }}>
            Add Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendManagement;
