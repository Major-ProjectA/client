import axios from "axios";
import React, { useState } from "react";

function FormRegisterEmployee() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        userName,
        email,
        passwordHash,
        confirmPassword,
      };

      await axios.post("http://localhost:5000/api/users/signup", registerData);
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
                <div className="panel-heading" style={{ backgroundColor: '#205AA7' }}>
                  <h1 className="panel-title" style={{ color: '#C0C0C0' }}>
                    EMPLOYEE 👨‍💼
                  </h1>
                </div>
                <div className="panel-body">
                  {/* <img src={'/assets/img/Job-Listing.png'} className="img-responsive" alt="" /> */}

                  <form role="form" onSubmit={register}>
                    <fieldset>
                      <div className="form-group">
                        <h3 style={{ color: '#205AA7', textAlign: 'center', fontWeight: 'bold' }}>Create An Account</h3>
                        <label style={{ paddingLeft: '2%', color: '#205AA7' }}>Username:</label>
                        <input
                          className="form-control"
                          type="userName"
                          placeholder="Username"
                          onChange={(e) => setUsername(e.target.value)}
                          value={userName}
                          // name="email"
                          // type="email"
                          // autofocus
                        />                      
                        <label style={{ paddingLeft: '2%', color: '#205AA7' }}>Email:</label>
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
                        <label style={{ paddingLeft: '2%', color: '#205AA7' }}>Password: </label>
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
                        <label style={{ paddingLeft: '2%', color: '#205AA7' }}>Confirm Password:</label>
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Verify your password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          value={confirmPassword}
                          // name="password"
                          // type="password"
                          // value=""
                        />
                      </div>

                      <div className="checkbox" style={{ marginLeft: '5%' }}>
                        <label style={{ color: '#205AA7' }}>
                          <input
                            name="remember"
                            type="checkbox"
                            style={{ marginLeft: '-7%', width: '5%', backgroundcolor: '#205AA7', color: '#205AA7' }}
                            value="Remember Me"
                          />
                          Remember Me
                        </label>
                      </div>

                      <button type="submit" className="btn btn-login" style={{ backgroundColor: '#205AA7' }}>Register</button>
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

export default FormRegisterEmployee;
