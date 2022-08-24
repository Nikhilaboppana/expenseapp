// import React from "react";

// const AddUser = () => {
//   return <div>Form coming soon...</div>;
// };

// export default AddUser;
import React, { useRef } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const inputNameRef = useRef();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const avatarNum = Math.round(Math.random() * 10);
    axios
      .post("http://localhost:5050/users", {
        name: inputNameRef.current.value,
        avatar: `https://randomuser.me/api/portraits/lego/${avatarNum}.jpg`,
      })
      .then((response) => {
        navigate("/list-users");
      })
      .catch(console.error);
  };

  return (
    <div className="row">
      <div className="col-10 offset-1">
        <div className="card">
          <div className="card-body">
            <form>
              {/* form group */}
              <div className="form-group">
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="name">Your name : </label>
                  </div>
                  <div className="col-5">
                    <input
                      type="text"
                      id="name"
                      className="form-control form-control-sm"
                      ref={inputNameRef}
                    />
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-primary btn-block btn-sm"
                      onClick={submitHandler}
                    >
                      Add User
                    </button>
                  </div>
                </div>
              </div>
              {/* button */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
