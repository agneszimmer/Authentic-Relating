import "../../App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import profile from "../../pictures/profile2.jpg";

import circle from "../../pictures/circle.png"; //loading

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://arg-api.herokuapp.com/games/${id}`
        );
        const jsonData = await response.json();
        console.log(jsonData);

        if (response) {
          setUser(jsonData);
        }
      } catch (err) {
        console.log(err.message);
      }
      setLoading(false);
    };
    getUser();
  }, [id]);

  if (loading)
    return <img className="loadingImage" src={circle} alt="loading..." />; //spinner einfügen
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="profileContainer">
      {user && (
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    {
                      <img
                        src={profile}
                        alt="Profile"
                        className="rounded-circle"
                        width="150"
                      />
                    }
                    <div className="mt-3">
                      <h4>{user.username}</h4>
                      <p className="text-secondary mb-1">{user.bio}</p>
                      <p className="text-muted font-size-sm">{user.location}</p>
                      <button className="btn btn-primary">Change</button>
                      <button className="btn btn-outline-primary">
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {user.username}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{user.email}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      (239) 816-9029
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Password</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Change</div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
