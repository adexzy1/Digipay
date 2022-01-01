import React, { useEffect } from 'react';
import auth from './firebase/fire';
import { signOut } from '@firebase/auth';
import { useHistory } from 'react-router';
import { MdEdit } from 'react-icons/md';
import { MdAccessTime } from 'react-icons/md';
import { MdWarning } from 'react-icons/md';
import { MdOutlineLogout } from 'react-icons/md';

function LogoutNav({ showset, menuToggle }) {
  const history = useHistory();
  //functions
  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('token');
      history.push('/');
    });
  };
  //useEffects
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/');
    }
  }, []);

  return (
    <div
      id="logout_nav"
      className={menuToggle ? 'show_profile-menu' : 'remove_profile-menu'}
    >
      <span className="remove_profile-nav" onClick={showset}>
        X
      </span>
      <ul>
        <div className="logout_nav-item">
          <MdEdit />
          <li>Edit Profile</li>
        </div>
        <div className="logout_nav-item">
          <MdAccessTime />
          <li>Scheduled Payments</li>
        </div>
        <div className="logout_nav-item">
          <MdWarning />
          <li>Report an issue</li>
        </div>
        <div className="logout_nav-item" onClick={logOut}>
          <MdOutlineLogout />
          <li>Log out</li>
        </div>
      </ul>
    </div>
  );
}

export default LogoutNav;
