import React from 'react';

function FormRegisterEmployee() {
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

                  <form role="form">
                    <fieldset>
                      <div className="form-group">
                        <h3 style={{ color: '#205AA7', textAlign: 'center', fontWeight: 'bold' }}>Create An Account</h3>
                        <label style={{ paddingLeft: '2%', color: '#205AA7' }}>Full Name:</label>
                        <input
                          className="form-control"
                          placeholder="Fullname"
                          // name="email"
                          // type="email"
                          // autofocus
                        />
                        <label style={{ paddingLeft: '2%', color: '#205AA7' }}>Phone:</label>
                        <input
                          className="form-control"
                          placeholder="Phone"
                          // name="phone"
                          // type="phone"
                          // autofocus
                        />
                        <label style={{ paddingLeft: '2%', color: '#205AA7' }}>Email:</label>
                        <input
                          className="form-control"
                          placeholder="E-mail"
                          // name="email"
                          // type="email"
                          // autofocus
                        />
                      </div>
                      <div className="form-group">
                        <label style={{ paddingLeft: '2%', color: '#205AA7' }}>Password: </label>
                        <input
                          className="form-control"
                          placeholder="Password"
                          // name="password"
                          // type="password"
                          // value=""
                        />
                        <label style={{ paddingLeft: '2%', color: '#205AA7' }}>Confirm Password:</label>
                        <input
                          className="form-control"
                          placeholder="Password"
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
                      <a href="# " className="btn btn-login" style={{ backgroundColor: '#205AA7' }}>
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

export default FormRegisterEmployee;
