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
            maxWidth: '600px', // Limit the width of the card
            margin: '0 auto 20px', // Center the card and space them vertically
            padding: '15px', // Adjust padding for better spacing
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for card depth
            backgroundColor: '#fff', // White background for the card
          }}
        >
          <div className="d-flex align-items-center" style={{ width: '100%' }}>
            <img
              src={user.profilePicture}
              alt={`${user.name}'s profile`}
              className="rounded-circle"
              style={{ width: '40px', height: '40px', marginRight: '10px' }} // Small profile picture
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

          {/* If the user has a status image, show it below the text */}
          {user.statusImage && (
            <img
              src={user.statusImage}
              alt="Status related"
              className="mt-2"
              style={{
                width: '100%',
                maxWidth: '300px', // Keep image size manageable
                height: 'auto', // Maintain aspect ratio
                objectFit: 'fill',
                borderRadius: '8px', // Rounded corners for the image
                marginTop: '10px', // Space above the image
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Feed;
