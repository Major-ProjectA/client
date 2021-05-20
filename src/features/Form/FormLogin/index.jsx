import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authcontext';
import { useHttpClient } from '../../../hooks/http-hook';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../../util/Validator';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const FormLogin = () => {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const { sendRequest } = useHttpClient();
  const [error, setError] = useState('');

  async function login(e) {
    e.preventDefault();

    try {
      const responseData = await sendRequest(
        'http://localhost:5000/api/users/login',
        'POST',
        JSON.stringify({
          email,
          passwordHash,
        }),
        {
          'Content-Type': 'application/json',
        }
      );
      console.log(responseData);
      //alert("Login successfully.");
      Swal.fire('Awesome!', "You're successfully logged in!", 'success').then((result) => {
        if (result.isConfirmed || result.isDismissed) {
        }
      });
      auth.login(responseData.user.id);
      auth.authorization(responseData.user.userName);
      auth.authorization(responseData.user.role);
    } catch (err) {
      console.error(err);
      setError('Your email or password is not correct.');
      setTimeout(() => {
        setError('');
      }, 5000);
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
                  <h3 className="panel-title" style={{ fontWeight: 'bold', color: 'green' }}>
                    Login With Account
                  </h3>
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
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Password"
                          onChange={(e) => setPasswordHash(e.target.value)}
                          value={passwordHash}
                          validators={[VALIDATOR_EMAIL()]}
                          required
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
                      <div>{error && <span className="error-message">{error}</span>}</div>
                      <button type="submit" className="btn btn-login" style={{ height: '1%' }}>
                        Sign In
                      </button>
                    </fieldset>
                  </form>
                  <div style={{ textAlign: 'center', marginTop: '-4%' }}>
                    <a>
                      <p>
                        Do not have an account?{' '}
                        <Link to="/register">
                          <label style={{ cursor: 'pointer' }}>Click here!</label>
                        </Link>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormLogin;
