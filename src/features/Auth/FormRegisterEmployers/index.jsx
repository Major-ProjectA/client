import axios from 'axios';
import React, { useState } from 'react';

function FormRegisterEmployers() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function registerEmployer(e) {
    e.preventDefault();
    try {
      const registerData = {
        userName,
        email,
        password,
        confirmPassword,
      };

      await axios.post("http://localhost:5000/api/users/signup", registerData);

    } catch(err) {
      console.log(err);
    }
  }

  return (
    <>
      <section className="login-plane-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="login-panel panel panel-default">
                <div className="panel-heading" style={{ backgroundColor: '#EE9A00' }}>
                  <h1 className="panel-title" style={{ color: '#C0C0C0' }}>
                    EMPLOYERS 👩‍💼
                  </h1>
                </div>
                <div className="panel-body">
                  {/* <img src={'/assets/img/Job-Listing.png'} className="img-responsive" alt="" /> */}

                  <form role="form">
                    <fieldset>
                      <div className="form-group">
                        <h3 style={{ color: '#EE9A00', textAlign: 'center', fontWeight: 'bold' }}>Create An Account</h3>
                        <label style={{ paddingLeft: '2%', color: '#EE9A00' }}>Username:</label>
                        <input
                          type="userName"
                          className="form-control"
                          placeholder="Username"
                          onChange={(e) => setUsername(e.target.value)}
                          value={userName}
                          // name="email"
                          // type="email"
                          // autofocus
                        />
                        <label style={{ paddingLeft: '2%', color: '#EE9A00' }}>Email:</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="E-mail"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          // name="email"
                          // type="email"
                          // autofocus
                        />
                      </div>
                      <div className="form-group">
                        <label style={{ paddingLeft: '2%', color: '#EE9A00' }}>Password: </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          // name="password"
                          // type="password"
                          // value=""
                        />
                        <label style={{ paddingLeft: '2%', color: '#EE9A00' }}>Confirm Password:</label>
                        <input
                          type="confirmPassword"
                          className="form-control"
                          placeholder="Password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          value={confirmPassword}
                          // name="password"
                          // type="password"
                          // value=""
                        />
                      </div>

                      <div className="checkbox" style={{ marginLeft: '5%' }}>
                        <label style={{ color: '#EE9A00' }}>
                          <input
                            name="remember"
                            type="checkbox"
                            style={{ marginLeft: '-7%', width: '5%', backgroundcolor: '#EE9A00', color: '#EE9A00' }}
                            value="Remember Me"
                          />
                          Remember Me
                        </label>
                      </div>
                      <button type="submit" className="btn btn-login" style={{ backgroundColor: '#EE9A00' }}>
                        Register
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FormRegisterEmployers;
