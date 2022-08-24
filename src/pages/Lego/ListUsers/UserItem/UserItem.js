import React from "react";
import { useNavigate } from "react-router-dom";

import "./UserItem.css";

const UserItem = (props) => {
  const navigate = useNavigate();

  const onUserSelected = () => {
    navigate(`/user/${props.user.id}`);
  };
  return (
    <div className="col-4">
      <div className="card clickable" onClick={onUserSelected}>
        <div className="card-img-top">
          <img
            src={props.user.avatar}
            alt={props.user.name}
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="card-body">
          <h6 className="text-center">{props.user.name.toUpperCase()}</h6>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
