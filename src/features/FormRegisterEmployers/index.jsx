import React from 'react';

function FormRegisterEmployers() {
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
                        <label style={{ paddingLeft: '2%', color: '#EE9A00' }}>Full Name:</label>
                        <input
                          className="form-control"
                          placeholder="Fullname"
                          // name="email"
                          // type="email"
                          // autofocus
                        />
                        <label style={{ paddingLeft: '2%', color: '#EE9A00' }}>Phone:</label>
                        <input
                          className="form-control"
                          placeholder="Phone"
                          // name="phone"
                          // type="phone"
                          // autofocus
                        />
                        <label style={{ paddingLeft: '2%', color: '#EE9A00' }}>Email:</label>
                        <input
                          className="form-control"
                          placeholder="E-mail"
                          // name="email"
                          // type="email"
                          // autofocus
                        />
                      </div>
                      <div className="form-group">
                        <label style={{ paddingLeft: '2%', color: '#EE9A00' }}>Password: </label>
                        <input
                          className="form-control"
                          placeholder="Password"
                          // name="password"
                          // type="password"
                          // value=""
                        />
                        <label style={{ paddingLeft: '2%', color: '#EE9A00' }}>Confirm Password:</label>
                        <input
                          className="form-control"
                          placeholder="Password"
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
                      <a href="# " className="btn btn-login" style={{ backgroundColor: '#EE9A00' }}>
                        Register
                      </a>
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
