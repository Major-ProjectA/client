import React, { Component } from 'react';

import './Navbars.css';

class Navbars extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-default navbar-fixed navbar-light white bootsnav">
          <div className="container">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
              <i className="fa fa-bars"></i>
            </button>
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                <img src={'../../assets/img/Job-Listing.png'} className="logo logo-scrolled" alt="" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul className="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
                {/* <li>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find Freelancer "
                  />
                </li> */}
                <li className="dropdown megamenu-fw">
                  <a href={'# '} className="dropdown-toggle" data-toggle="dropdown">
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
                                <a href={'/'}>Home Page</a>
                              </li>
                              <li>
                                <a href={'# '}>Freelancing</a>
                              </li>
                              <li>
                                <a href={'# '}>Sign In / Sign Up</a>
                              </li>
                              <li>
                                <a href={'# '}>Search Job</a>
                              </li>
                              <li>
                                <a href={'# '}>Accordion</a>
                              </li>
                              <li>
                                <a href={'# '}>Tab Style</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-menu col-md-3">
                          <h6 className="title">For Candidate</h6>

                          <div className="content">
                            <ul className="menu-col">
                              <li>
                                <a href={'# '}>Browse Jobs</a>
                              </li>
                              <li>
                                <a href={'# '}>Browse Companies</a>
                              </li>
                              <li>
                                <a href={'# '}>Create Resume</a>
                              </li>
                              <li>
                                <a href={'# '}>Resume Detail</a>
                              </li>
                              <li>
                                <a href={'# '}>Manage Jobs</a>
                              </li>
                              <li>
                                <a href={'# '}>Job Detail</a>
                              </li>
                              <li>
                                <a href={'# '}>Job In Grid</a>
                              </li>
                              <li>
                                <a href={'# '}>Candidate Profile</a>
                              </li>
                              <li>
                                <a href={'# '}>Manage Resume 2</a>
                              </li>
                              <li>
                                <a href={'# '}>Company Detail</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-menu col-md-3">
                          <h6 className="title">For Employer</h6>

                          <div className="content">
                            <ul className="menu-col">
                              <li>
                                <a href={'# '}>Create Job</a>
                              </li>
                              <li>
                                <a href={'# '}>Create Company</a>
                              </li>
                              <li>
                                <a href={'# '}>Manage Company</a>
                              </li>
                              <li>
                                <a href={'# '}>Manage Candidate</a>
                              </li>
                              <li>
                                <a href={'# '}>Manage Employee</a>
                              </li>
                              <li>
                                <a href={'# '}>Browse Resume</a>
                              </li>
                              <li>
                                <a href={'# '}>New Search Job</a>
                              </li>
                              <li>
                                <a href={'# '}>Employer Profile</a>
                              </li>
                              <li>
                                <a href={'# '}>Manage Resume</a>
                              </li>
                              <li>
                                <a href={'# '}>New Job Detail</a>
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
                                <a href={'# '}>Freelancer detail</a>
                              </li>
                              <li>
                                <a href={'# '}>New Apply Job</a>
                              </li>
                              <li>
                                <a href={'# '}>Payment Methode</a>
                              </li>
                              <li>
                                <a href={'# '}>New LogIn / SignUp</a>
                              </li>
                              <li>
                                <a href={'# '}>Freelancing Jobs</a>
                              </li>
                              <li>
                                <a href={'# '}>Freelancers</a>
                              </li>
                              <li>
                                <a href={'# '}>Freelancers 2</a>
                              </li>
                              <li>
                                <a href={'# '}>Premium Candidate</a>
                              </li>
                              <li>
                                <a href={'# '}>Premium Candidate Detail</a>
                              </li>
                              <li>
                                <a href={'# '}>Blog detail</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href={'/job-list'}>Find Job</a>
                </li>
                <li>
                  <a href={'# '}>Blog</a>
                </li>
                <li>
                  <a href={'# '}>Create CV</a>
                </li>
                {/* <li>
                  <a>
                    <p style={{ color: 'green', fontWeight: 'bold' }}>HELLO USER</p>
                  </a>
                </li> */}
              </ul>
              <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle btn-employee"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ height: 'auto', width: 'auto', paddingTop: '0px', paddingTop: '3%' }}
                    >
                      For Employee
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="/login">
                        Login
                      </a>
                      <a class="dropdown-item" href="/register-employee">
                        Register
                      </a>
                    </div>
                  </div>
                </li>
                <li className="left-br">
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle btn-employers"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ height: 'auto', width: 'auto', paddingTop: '0px', paddingTop: '3%' }}
                    >
                      For Employers
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="/login">
                        Login
                      </a>
                      <a class="dropdown-item" href="register-employers">
                        Register
                      </a>
                      <a class="dropdown-item" href="#">
                        Post Recruitment
                      </a>
                      <a class="dropdown-item" href="#">
                        Find Employee
                      </a>
                    </div>
                  </div>
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
