import "../../css/Users.css";
import { useState, useEffect } from "react";
import { Container, Button, Card, Jumbotron } from "react-bootstrap";
import { useParams } from "react-router-dom";
import profile from "../../pictures/profile2.jpg";
import Loading from "../Loading";

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3333/users/${id}`);
        const jsonData = await response.json();
        console.log(jsonData);

        if (response) {
          setUser(jsonData);
        }
      } catch (error) {
        setError(error);
        console.log(error.message);
      }
      setLoading(false);
    };
    getUser();
  }, [id]);

  useEffect(() => {
    const random = Math.floor(Math.random() * 25);
  });

  if (loading) return <Loading />;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container className="profile-container">
      {/*       {user && (
        <Jumbotron>
        <h1>Hello {user.username}!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
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
      )} */}
    </Container>
  );
};

export default UserProfile;
