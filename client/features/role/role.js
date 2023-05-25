import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles } from "./roleSlice";

import { Link, useParams, useLocation, useNavigate } from "react-router-dom";

const RoleSelect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const roles = useSelector((state) => state.roleSelect);
  const location = useLocation();
  const { settingName } = location.state;
  const { settingID } = useParams();

  const backButton = () => {
    navigate("/settings");
  };

  useEffect(() => {
    dispatch(fetchRoles(settingID));
  }, [dispatch]);

  return (
    <>
      <>
        <div className="rolesContainer">
          <h2>{"> Choose your role"}</h2>

          <div className="roleList">
            {roles.map((aRole) => (
              <Link
                to={`/chat`}
                state={{ roleName: aRole.name, setting: settingName }}
                key={aRole.id}
              >
                <div className="singleRole">
                  <section>
                    <h3> {aRole.name.toUpperCase()}</h3>
                  </section>
                </div>
              </Link>
            ))}
            <div onClick={backButton} id="back-btn">
              {"<"}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default RoleSelect;
