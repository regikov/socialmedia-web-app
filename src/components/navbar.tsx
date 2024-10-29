import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/redux/store';
import { logout } from '@/redux/authSlice';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const currentUserId = useSelector((state: RootState) => state.auth.currentUserId);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login'); // Redirect to login page after logout
  };

  const goToProfile = () => {
    if (currentUserId) {
      router.push(`/userID/${currentUserId}`);
    }
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg mb-4" style={{ backgroundColor: '#343a40', borderRadius: '10px' }}>
        <a className="navbar-brand" href="#" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', marginLeft: '30px', color: 'white' }}>
          <img src="/images/instagram.png" alt="Instagram" style={{ width: '24px', height: '24px' }} />
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button onClick={goToProfile} className="btn btn-link nav-link text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Settings
              </button>
            </li>
            <li className="nav-item">
              <button onClick={handleLogout} className="btn btn-link nav-link text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
