import axios from "axios";
import React, { useState } from "react";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        passwordHash
      };

      await axios.post("http://localhost:5000/api/users/login", loginData);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <section className="login-plane-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="login-panel panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Login With Account</h3>
                </div>
                <div className="panel-body">
                  <img src={'/assets/img/Job-Listing.png'} className="img-responsive" alt="" />
                  <form role="form" onSubmit={login}>
                    <fieldset>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          // name="email"
                          // type="email"
                          // autofocus
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Password"
                          onChange={(e) => setPasswordHash(e.target.value)}
                          value={passwordHash}
                          // name="password"
                          // type="password"
                          // value=""
                        />
                      </div>
                      <div className="checkbox" style={{ marginLeft: '5%' }}>
                        <label>
                          <input
                            name="remember"
                            type="checkbox"
                            style={{ marginLeft: '-7%', width: '5%' }}
                            value="Remember Me"
                          />
                          Remember Me
                        </label>
                      </div>
                      <button type="submit" className="btn btn-login">
                        Sign In
                      </button>
                    </fieldset>
                  </form>
                  <ul className="social-login">
                    <li className="facebook-login">
                      <a href="# ">
                        <i className="fa fa-facebook"></i>Facebook
                      </a>
                    </li>
                    <span>OR</span>
                    <li className="google-plus-login">
                      <a href="# ">
                        <i className="fa fa-google-plus"></i>Google
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FormLogin;
