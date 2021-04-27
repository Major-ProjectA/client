import axios from 'axios';
import React, { useState } from 'react';

function FormRegisterEmployee() {
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        userName,
        email,
        passwordHash,
        confirmPassword,
      };

      await axios.post('http://localhost:5000/api/users/signup', registerData);
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
                  <h1 className="panel-title" style={{ fontWeight: 'bold', color: 'green' }}>
                    Create An Account
                  </h1>
                </div>
                <div className="panel-body">
                  {/* <img src={'/assets/img/Job-Listing.png'} className="img-responsive" alt="" /> */}

                  <form role="form" onSubmit={register}>
                    <fieldset>
                      <div className="form-group">
                        <img src={'/assets/img/Job-Listing.png'} className="img-responsive" alt="" />
                        <label style={{ paddingLeft: '2%' }}>Username:</label>
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
                        <label style={{ paddingLeft: '2%' }}>Email:</label>
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
                        <label style={{ paddingLeft: '2%' }}>Password: </label>
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
                        <label style={{ paddingLeft: '2%' }}>Confirm Password:</label>
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

                      <button type="submit" className="btn btn-login" style={{ height: '1%' }}>
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

export default FormRegisterEmployee;
