import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import AuthForm from "../auth/AuthForm";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const messageHistory = useSelector((state) => state.messageHistory);
  const [toggleAuthForm, setToggleAuthForm] = useState(false);

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/about");
    setToggleAuthForm(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <nav>
          <Link to="/">Home</Link>
          {messageHistory.length > 0 ? (
            <Link to="/continue">Play</Link>
          ) : (
            <Link to="/settings">Play</Link>
          )}
          <Link to="/guide">Guide</Link>
          <Link to="/about">About</Link>
          <button id="logout-btn" type="button" onClick={logoutAndRedirectHome}>
            Logout
          </button>
        </nav>
      ) : (
        <nav>
          <Link to="/">Home</Link>
          {messageHistory.length > 0 ? (
            <Link to="/continue">Play</Link>
          ) : (
            <Link to="/settings">Play</Link>
          )}
          <Link to="/guide">Guide</Link>
          <Link to="/about">About</Link>
          <Link to="#" onClick={() => setToggleAuthForm(true)}>
            Login
          </Link>
        </nav>
      )}
      {toggleAuthForm && (
        <AuthForm
          name="login"
          displayName="Login"
          setToggleAuthForm={setToggleAuthForm}
        />
      )}
    </div>
  );
};

export default Navbar;
