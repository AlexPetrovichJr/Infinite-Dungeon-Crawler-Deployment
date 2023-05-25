import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearMessageHistory } from "../chat/ChatSlice";

const Continue = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearMessageHistory());
  };
  return (
    <div id="continue">
      <h1>CONTINUE?</h1>
      <div>
        <Link to="/chat">YES</Link>
        <span>/</span>
        <Link to="/settings" onClick={handleClick}>
          NO
        </Link>
      </div>
    </div>
  );
};

export default Continue;
