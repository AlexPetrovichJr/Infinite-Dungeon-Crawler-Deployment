import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import AuthForm from '../auth/AuthForm';

const Navbar = () => {
  const isLoggedIn = useSelector(state => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggleAuthForm, setToggleAuthForm] = useState(false);

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/about');
    setToggleAuthForm(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <nav>
          {/* The navbar will show these links after you log in */}
          <Link to='/'>Home</Link>
          <Link to='/settings'>Play</Link>
          <Link to='/guide'>Guide</Link>
          <Link to='/about'>About</Link>
          <button id='logout-btn' type='button' onClick={logoutAndRedirectHome}>
            Logout
          </button>
        </nav>
      ) : (
        <nav>
          {/* The navbar will show these links before you log in */}
          <Link to='/'>Home</Link>
          <Link to='/settings'>Play</Link>
          <Link to='/guide'>Guide</Link>
          <Link to='/about'>About</Link>
          <Link to='#' onClick={() => setToggleAuthForm(true)}>
            Login
          </Link>
        </nav>
      )}
      {toggleAuthForm && (
        <AuthForm
          name='login'
          displayName='Login'
          setToggleAuthForm={setToggleAuthForm}
        />
      )}
    </div>
  );
};

export default Navbar;
