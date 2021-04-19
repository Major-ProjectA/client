import React from "react";

function FormRegister() {
  return (
    <>
      <section className="login-plane-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="login-panel panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Create An Account</h3>
                </div>
                <div className="panel-body">
                  <img
                    src={"/assets/img/Job-Listing.png"}
                    className="img-responsive"
                    alt=""
                  />
                  <form role="form">
                    <fieldset>
                      <div className="form-group">
                        <label style={{ paddingLeft: "2%" }}>Full Name:</label>
                        <input
                          className="form-control"
                          placeholder="Fullname"
                          // name="email"
                          // type="email"
                          // autofocus
                        />
                        <label style={{ paddingLeft: "2%" }}>Phone:</label>
                        <input
                          className="form-control"
                          placeholder="Phone"
                          // name="phone"
                          // type="phone"
                          // autofocus
                        />
                        <label style={{ paddingLeft: "2%" }}>Email:</label>
                        <input
                          className="form-control"
                          placeholder="E-mail"
                          // name="email"
                          // type="email"
                          // autofocus
                        />
                      </div>
                      <div className="form-group">
                        <label style={{ paddingLeft: "2%" }}>Password: </label>
                        <input
                          className="form-control"
                          placeholder="Password"
                          // name="password"
                          // type="password"
                          // value=""
                        />
                        <label style={{ paddingLeft: "2%" }}>
                          Confirm Password:
                        </label>
                        <input
                          className="form-control"
                          placeholder="Password"
                          // name="password"
                          // type="password"
                          // value=""
                        />
                      </div>

                      <div className="checkbox" style={{ marginLeft: "5%" }}>
                        <label>
                          <input
                            name="remember"
                            type="checkbox"
                            style={{ marginLeft: "-7%", width: "5%" }}
                            value="Remember Me"
                          />
                          Remember Me
                        </label>
                      </div>
                      <a href="# " className="btn btn-login">
                        Sign Up
                      </a>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="accordion">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3">
              <div class="sidebar-wrapper">
                <div class="sidebar-box-header bb-1">
                  <h4>Create An Account</h4>
                </div>
                <form class="billing-form">
                  <div class="row">
                    <div class="col-xs-12">
                      <label>Full Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-6">
                      <label>User Name</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="col-xs-6">
                      <label>Email</label>
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-6">
                      <label>Password</label>
                      <input type="password" class="form-control" />
                    </div>
                    <div class="col-xs-6">
                      <label>Confirm Password</label>
                      <input type="password" class="form-control" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-12">
                      <span class="custom-checkbox">
                        <input type="checkbox" id="1" />
                        <label for="1"></label>
                      </span>
                      <p>
                        I give my consent to Job Listing to collect my data with
                        GDPR regulation.
                      </p>
                    </div>
                  </div>
                  <div class="row mrg-top-30">
                    <div class="col-md-12 text-center">
                      <a href="#" class="btn btn-success">
                        SignUp
                      </a>
                      <a href="#" class="btn btn-default">
                        Cancel
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default FormRegister;
