import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface FeedProps {
  userId: number;
  filterUserId: number | null;
}

const Feed: React.FC<FeedProps> = ({ userId, filterUserId }) => {
  const userFriends = useSelector(
    (state: RootState) => state.user.users.find(user => user.id === userId)?.friends || []
  );

  const filteredUsers = useSelector((state: RootState) =>
    state.user.users.filter(user =>
      filterUserId
        ? user.id === filterUserId && (user.id === userId || userFriends.includes(user.id))
        : user.id === userId || userFriends.includes(user.id)
    )
  );

  return (
    <div className="list-group">
      {filteredUsers.map(user => (
        <div key={user.id} className="list-group-item d-flex align-items-center">
          <img
            src={user.profilePicture}
            alt={`${user.name}'s profile`}
            className="rounded-circle mr-3"
            style={{ width: '50px', height: '50px', marginRight: '15px' }}
          />
          <div>
            <h5 className="mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{user.name}</h5>
            <p className="mb-0" style={{ fontFamily: 'Montserrat, sans-serif', color: '#888' }}>{user.statusMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
