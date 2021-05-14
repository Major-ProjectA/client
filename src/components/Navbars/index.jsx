import React, { Component, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../features/context/authcontext';

import './Navbars.css';

const Navbars = () => {
  const auth = useContext(AuthContext);
  console.log(auth);
    return (
      <>
        <nav className="navbar navbar-default navbar-fixed navbar-light white bootsnav">
          <div className="container">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
              <i className="fa fa-bars"></i>
            </button>
            <div className="navbar-header">
              <NavLink className="navbar-brand" to="/">
                <img src={'../../assets/img/Job-Listing.png'} className="logo logo-scrolled" alt="" />
              </NavLink>
            </div>
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul className="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
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
                                <a href={'/'}>Home</a>
                              </li>
                              <li>
                                <a href={'/'}>About</a>
                              </li>
                              <li>
                                <a href={'# '}>Blog</a>
                              </li>
                              <li>
                                <a href={'# '}>Interview</a>
                              </li>
                              <li>
                                <a href={'# '}>Wage</a>
                              </li>
                              <li>
                                <a href={'/login'}>Login</a>
                              </li>
                              <li>
                                <a href={'/register'}>Register</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-menu col-md-3">
                          <h6 className="title">For Employee</h6>

                          <div className="content">
                            <ul className="menu-col">
                              <li>
                                <a href={'/jobs'}>Browse Jobs</a>
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
                          <h6 className="title">For Employers</h6>

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
                          <h6 className="title">{/* Extra Pages <span className="new-offer">New</span> */}For Admin</h6>

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
                  <NavLink to='/jobs'>Find Job</NavLink>
                </li>
                <li>
                  <a href={'# '}>Blog</a>
                </li>
                {auth.isLoggedIn && !auth.isAdmin && !auth.isEmployer && (
                  <li>
                    <NavLink to='/create-cv'>Create CV</NavLink>
                </li>
                )}        
                {/* {auth.isLoggedIn && auth.isEmployer (
                  <li>
                    <NavLink to='/'>Create Job</NavLink>
                </li>
                )}  */}
                {/* {auth.isLoggedIn && auth.isAdmin (
                  <li>
                    <NavLink to='/'>Manage</NavLink>
                </li>
                )}       */}
                {/* {auth.isLoggedIn && (
                    <li>
                      <a>
                        <p style={{ color: 'green', fontWeight: 'bold' }}>HELLO {auth.userName}</p>
                      </a>
                  </li>
                )} */}
                
              </ul>

              <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                {auth.isLoggedIn && (
                  <li class="left-br">
                    <button class="signin" type="button" onClick={auth.logout}>
                      <i class="fa fa-sign-in" aria-hidden="true"></i>Log out
                    </button>
                  </li>
                )}
                {!auth.isLoggedIn && (
                  <li class="left-br">
                    <NavLink to="/login" class="signin">
                      Log In Now
                    </NavLink>
                  </li>
                )}      
              </ul>
            </div>
          </div>
        </nav>
        <div className="clearfix"></div>
      </>
    );
}

export default Navbars;
