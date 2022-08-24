import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRef } from "react";

const User = () => {
  const params = useParams();
  const { userId } = params;
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  const [postflag, setPostFlag] = useState(false);
  const ref1 = useRef();
  const [itemdeleted, setItemDeleted] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5050/users?id=" + userId)
      .then((response) => {
        setUser(response.data[0]);
      })
      .catch(console.error);
  }, [userId, postflag, itemdeleted]);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/posts?author=${userId}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch(console.error);
  }, [userId, postflag, itemdeleted]);
  const buttonclick = (event) => {
    setPostFlag(!postflag);
  };
  const buttonclicked = (event) => {
    event.preventDefault();
    console.log("name", ref1.current.value);
    axios
      .post(`http://localhost:5050/posts`, {
        title: ref1.current.value,
        author: userId,
      })
      .then((response) => {
        // setPosts(response.data);
        buttonclick();
      })
      .catch(console.error);
  };
  const DeletePost = (PostId) => {
    axios
      .delete(`http://localhost:5050/posts/${PostId}`)
      .then((response) => {
        setItemDeleted(!itemdeleted);
        // setItemDeleted(!itemdeleted);
        // setPosts(response.data);
      })
      .catch(console.error);
  };
  if (user) {
    return (
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <div className="card-img-top">
              <img
                src={user.avatar}
                alt={user.name}
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="card-body">
              <h2 className="text-center">{user.name}</h2>
              {posts.length > 0 ? (
                <ul>
                  {" "}
                  {posts.map((p) => (
                    <li
                      key={p.id}
                      onDoubleClick={() => DeletePost(p.id)}
                      className="list-group-item clickable"
                    >
                      {p.title}{" "}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No Post Found.</p>
              )}
            </div>
            <div className="text-center">
              <button className="btn btn-danger" onClick={buttonclick}>
                Add New Post
              </button>
              {postflag && (
                <div>
                  <label>Add Post</label>
                  <input type="text" ref={ref1}></input>
                  <button className="btn btn-primary" onClick={buttonclicked}>
                    Add Post
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>No User found</p>;
  }
};

export default User;
