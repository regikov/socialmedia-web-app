import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store'; // Assuming your store is here
import { setStatusMessage } from '@/redux/userSlice';

interface StatusUpdateProps {
  userId: number;
  statusImage?: string; // Optional prop
}

const StatusUpdate: React.FC<StatusUpdateProps> = ({ userId, statusImage = '' }) => {
  const dispatch = useDispatch<AppDispatch>(); 
  const [newStatus, setNewStatus] = useState('');

  const handleStatusUpdate = () => {
    if (newStatus.trim()) {
      dispatch(setStatusMessage({ id: userId, statusMessage: newStatus, statusImage })); 
      setNewStatus('');
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
        style={{ fontFamily: 'Montserrat, sans-serif' }}
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
