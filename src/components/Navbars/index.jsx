import React, { Component } from "react";

class Navbars extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-default navbar-fixed navbar-light white bootsnav">
          <div className="container">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i className="fa fa-bars"></i>
            </button>
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                <img
                  src={"../../assets/img/Job-Listing.png"}
                  className="logo logo-scrolled"
                  alt=""
                />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav navbar-left"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                {/* <li>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find Freelancer "
                  />
                </li> */}
                <li className="dropdown megamenu-fw">
                  <a
                    href={"# "}
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Brows
                  </a>
                  <ul className="dropdown-menu megamenu-content" role="menu">
                    <li>
                      <div className="row">
                        <div className="col-menu col-md-3">
                          <h6 className="title">Main Pages</h6>

                          <div className="content">
                            <ul className="menu-col">
                              <li>
                                <a href={"/"}>Home Page</a>
                              </li>
                              <li>
                                <a href={"# "}>Freelancing</a>
                              </li>
                              <li>
                                <a href={"# "}>Sign In / Sign Up</a>
                              </li>
                              <li>
                                <a href={"# "}>Search Job</a>
                              </li>
                              <li>
                                <a href={"# "}>Accordion</a>
                              </li>
                              <li>
                                <a href={"# "}>Tab Style</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-menu col-md-3">
                          <h6 className="title">For Candidate</h6>

                          <div className="content">
                            <ul className="menu-col">
                              <li>
                                <a href={"# "}>Browse Jobs</a>
                              </li>
                              <li>
                                <a href={"# "}>Browse Companies</a>
                              </li>
                              <li>
                                <a href={"# "}>Create Resume</a>
                              </li>
                              <li>
                                <a href={"# "}>Resume Detail</a>
                              </li>
                              <li>
                                <a href={"# "}>Manage Jobs</a>
                              </li>
                              <li>
                                <a href={"# "}>Job Detail</a>
                              </li>
                              <li>
                                <a href={"# "}>Job In Grid</a>
                              </li>
                              <li>
                                <a href={"# "}>Candidate Profile</a>
                              </li>
                              <li>
                                <a href={"# "}>Manage Resume 2</a>
                              </li>
                              <li>
                                <a href={"# "}>Company Detail</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-menu col-md-3">
                          <h6 className="title">For Employer</h6>

                          <div className="content">
                            <ul className="menu-col">
                              <li>
                                <a href={"# "}>Create Job</a>
                              </li>
                              <li>
                                <a href={"# "}>Create Company</a>
                              </li>
                              <li>
                                <a href={"# "}>Manage Company</a>
                              </li>
                              <li>
                                <a href={"# "}>Manage Candidate</a>
                              </li>
                              <li>
                                <a href={"# "}>Manage Employee</a>
                              </li>
                              <li>
                                <a href={"# "}>Browse Resume</a>
                              </li>
                              <li>
                                <a href={"# "}>New Search Job</a>
                              </li>
                              <li>
                                <a href={"# "}>Employer Profile</a>
                              </li>
                              <li>
                                <a href={"# "}>Manage Resume</a>
                              </li>
                              <li>
                                <a href={"# "}>New Job Detail</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-menu col-md-3">
                          <h6 className="title">
                            Extra Pages <span className="new-offer">New</span>
                          </h6>

                          <div className="content">
                            <ul className="menu-col">
                              <li>
                                <a href={"# "}>Freelancer detail</a>
                              </li>
                              <li>
                                <a href={"# "}>New Apply Job</a>
                              </li>
                              <li>
                                <a href={"# "}>Payment Methode</a>
                              </li>
                              <li>
                                <a href={"# "}>New LogIn / SignUp</a>
                              </li>
                              <li>
                                <a href={"# "}>Freelancing Jobs</a>
                              </li>
                              <li>
                                <a href={"# "}>Freelancers</a>
                              </li>
                              <li>
                                <a href={"# "}>Freelancers 2</a>
                              </li>
                              <li>
                                <a href={"# "}>Premium Candidate</a>
                              </li>
                              <li>
                                <a href={"# "}>Premium Candidate Detail</a>
                              </li>
                              <li>
                                <a href={"# "}>Blog detail</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href={"/list-job"}>Find Job</a>
                </li>
                <li>
                  <a href={"# "}>Blog</a>
                </li>
              </ul>
              <ul
                className="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li>
                  <a href={"/register"}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>SignUp
                  </a>
                </li>
                {/* <li>
                  <a href={"# "}>
                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                    Pricing
                  </a>
                </li> */}
                <li className="left-br">
                  {/* <a
                    href={"# "}
                    data-toggle="modal"
                    data-target="#signup"
                    className="signin"
                  > */}
                  <a href={"/login"} data-target="#signup" className="signin">
                    Sign In Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="clearfix"></div>
      </>
    );
  }
}

export default Navbars;
