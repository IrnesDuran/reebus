import React, { useState } from 'react';
import './Header.styles.scss';
import CloseIcon from '../../assets/images/close-icon.svg';

import { logout } from '../../redux/auth/auth.actions';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Header = props => {
  const [logoutModal, setLogoutModal] = useState(false); //dropdown modal which will hod user related options
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector(state => state.auth);

  const dispatch = useDispatch();

  //logout action dispatch
  const logoutHandler = () => {
    setLogoutModal(false);
    dispatch(logout());
    props.history.push('/login');
  };

  //used to define username in header
  useEffect(() => {
    setIsLoading(true);

    if (user.userName !== '') {
      const userName = user.userName;

      setUserName(userName);
    }

    setIsLoading(false);
  }, [user]);

  return (
    <div className="header">
      {(props.location.pathname === '/login' ||
        props.location.pathname === '/' ||
        props.location.pathname === '/Login') && (
        <div className="reebus-logo" />
      )}
      {props.location.pathname === '/' && (
        <div className="avatar-container">
          <div className="magnifier" />
          {isLoading ? <div>Loading...</div> : <div>{userName}</div>}
          <div className="avatar" onClick={() => setLogoutModal(!logoutModal)}>
            {userName[0]}
          </div>
          {logoutModal && (
            <div className="logout-modal" onClick={logoutHandler}>
              Log out
            </div>
          )}
        </div>
      )}
      {props.location.pathname === '/login' ||
      props.location.pathname === '/' ||
      props.location.pathname === '/Login' ? (
        ''
      ) : (
        <div className="abort-project" onClick={() => props.history.push('/')}>
          <img src={CloseIcon} alt="close" />
        </div>
      )}
    </div>
  );
};

export default Header;
