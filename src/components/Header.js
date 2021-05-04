import React, { useState } from "react";
import Modal from "react-responsive-modal";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [sign, setSign] = useState(false);

  const onOpenModal = () => {
    setSign(true);
  };

  const onOpenModalLogin = () => {
    setLogin(true);
  };

  const onCloseModal = () => {
    setSign(false);
  };

  const onCloseModalclose = () => {
    setLogin(false);
  };

  return (
    <>
      <header
        className="header header-animated opaque"
        style={{ display: "block", paddingTop: "5px", paddingBottom: "5px" }}
      >
        <div className="container">
          <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <a className="logo" href="#">
                {/*                 <img
                  className="img-responsive logo"
                  src={icon}
                  alt=""
                  data-logo-alt={icon}
                /> */}
              </a>
            </div>

            <div
              className="nav-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbarMain"
              aria-expanded="false"
              style={{ top: "15px" }}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div
              className="navbar-collapse collapse in"
              id="navbarMain"
              aria-expanded="true"
              style={{ top: "65px" }}
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <button
                    className="btn btn-primary-outline"
                    id="signup"
                    onClick={onOpenModal}
                  >
                    SignUp
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-primary-outline"
                    id="login"
                    onClick={onOpenModalLogin}
                  >
                    Login
                  </button>
                </li>
              </ul>
              <ul className="nav navbar-nav collapsed-color">
                <li>
                  <a href="#">Home</a>
                </li>

                <li>
                  <a href="#">About</a>
                </li>

                <li>
                  <a href="#">Features</a>
                </li>

                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
              </ul>
            </div>

            {/* <!-- .navbar-collapse --> */}
          </nav>
        </div>
      </header>
      {/* Sign up model */}

      <Modal open={sign} onClose={onCloseModal}>
        <div className="modal-body">
          <h2>
            Get Started Absolutely<span> Free!</span>
          </h2>
          <span className="subtitle">No credit card needed</span>
          <form className="contact-form form-validate3" novalidate="novalidate">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                placeholder="First Name"
                required=""
                autocomplete="off"
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="E-mail"
                required=""
                autocomplete="off"
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="pass"
                className="form-control"
                placeholder="Password"
                required=""
                autocomplete="off"
                aria-required="true"
              />
            </div>
            <input
              className="btn btn-md btn-primary btn-center"
              id="sign_up"
              type="button"
              value="Sign Up"
            />
          </form>
        </div>
      </Modal>

      {/* <!-- signUp End -->
                  <!-- login --> */}

      <Modal open={login} onClose={onCloseModalclose}>
        <div className="modal-body">
          <h2>
            Login and Get <span>Started</span>
          </h2>
          <span className="subtitle">Just fill in the form below</span>
          <form className="contact-form form-validate4" novalidate="novalidate">
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="E-mail"
                required=""
                autocomplete="off"
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="pass"
                className="form-control"
                placeholder="Password"
                required=""
                autocomplete="off"
                aria-required="true"
              />
            </div>
            <input
              className="btn btn-md btn-primary btn-center"
              id="login_btn"
              type="button"
              value="Login"
            />
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Header;
