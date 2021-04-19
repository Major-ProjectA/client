import React from "react";

function FormLogin() {
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
                  <img
                    src={"/assets/img/Job-Listing.png"}
                    className="img-responsive"
                    alt=""
                  />
                  <form role="form">
                    <fieldset>
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="E-mail"
                          // name="email"
                          // type="email"
                          // autofocus
                        />
                      </div>
                      <div className="form-group">
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
