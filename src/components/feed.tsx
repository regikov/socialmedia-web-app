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
        <div
          key={user.id}
          className="list-group-item d-flex align-items-center flex-column"
          style={{
            width: '100%',
            maxWidth: '600px', // Make the card a bit smaller
            margin: '0 auto 20px', // Add margin to space the items
            padding: '15px', // Reduce padding
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff'
          }}
        >
          <div className="d-flex align-items-center" style={{ width: '100%' }}>
            <img
              src={user.profilePicture}
              alt={`${user.name}'s profile`}
              className="rounded-circle"
              style={{ width: '40px', height: '40px', marginRight: '10px' }}
            />
            <div style={{ flexGrow: 1 }}>
              <h6 className="mb-1" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '16px' }}>
                {user.name}
              </h6>
              <p
                className="mb-0"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '14px',
                  color: '#666',
                }}
              >
                {user.statusMessage}
              </p>
            </div>
          </div>

          {/* Display status image with a fixed size and margin */}
          {user.statusImage && (
            <img
              src={user.statusImage}
              alt="Status related"
              className="mt-2"
              style={{
                width: '100%',
                maxWidth: '400px', // Keep the image size manageable
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '8px',
                marginTop: '10px' // Reduce space above the image
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Feed;
