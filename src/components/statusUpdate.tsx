import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStatusMessage } from '@/redux/userSlice';

interface StatusUpdateProps {
  userId: number;
}

const StatusUpdate: React.FC<StatusUpdateProps> = ({ userId }) => {
  const dispatch = useDispatch();
  const [newStatus, setNewStatus] = useState('');

  const handleStatusUpdate = () => {
    if (newStatus.trim()) {
      dispatch(setStatusMessage({ id: userId, statusMessage: newStatus }));
      setNewStatus(''); // Clear the input field after updating
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        value={newStatus}
        onChange={(e) => setNewStatus(e.target.value)}
        placeholder="Update my status"
        className="form-control"
        style={{ fontFamily: 'Montserrat, sans-serif',  }}
      />
      <div className="input-group-append">
        <button onClick={handleStatusUpdate} className="btn btn-primary" style={{ backgroundColor: '#3897f0', borderColor: '#3897f0', fontFamily: 'Montserrat, sans-serif' }}>
          Update
        </button>
      </div>
    </div>
  );
};

export default StatusUpdate;