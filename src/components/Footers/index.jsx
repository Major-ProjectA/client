import React from 'react';

function Footers() {
  return (
    <>
      <footer className="footer">
        <div className="row lg-menu">
          <div className="container">
            <div className="col-md-4 col-sm-4">
              <a href={'/'}>
                <img src={'/assets/img/Job-Listing.png'} className="img-responsive" alt="" />
              </a>
            </div>
            <div className="col-md-8 co-sm-8 pull-right">
              <ul>
                <li>
                  <a href={'# '} title="">
                    Home
                  </a>
                </li>
                <li>
                  <a href={'# '} title="">
                    Blog
                  </a>
                </li>
                <li>
                  <a href={'# '} title="">
                    404
                  </a>
                </li>
                <li>
                  <a href={'# '} title="">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href={'# '} title="">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row no-padding">
          <div className="container">
            <div className="col-md-3 col-sm-12">
              <div className="footer-widget">
                <h3 className="widgettitle widget-title">About Job Listing</h3>

                <div className="textwidget">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>

                  <p>
                    7860 North Park Place
                    <br />
                    San Francisco, CA 94120
                  </p>

                  <p>
                    <strong>Email:</strong> Support@careerdesk
                  </p>

                  <p>
                    <strong>Call:</strong> <a href={'# '}>555-555-1234</a>
                  </p>
                  <ul className="footer-social">
                    <li>
                      <a href={'# '}>
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={'# '}>
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href={'# '}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={'# '}>
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={'# '}>
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <h3 className="widgettitle widget-title">All Navigation</h3>

                <div className="textwidget">
                  <div className="textwidget">
                    <ul className="footer-navigation">
                      <li>
                        <a href={'# '} title="">
                          Front-end Design
                        </a>
                      </li>
                      <li>
                        <a href={'# '} title="">
                          Android Developer
                        </a>
                      </li>
                      <li>
                        <a href={'# '} title="">
                          CMS Development
                        </a>
                      </li>
                      <li>
                        <a href={'# '} title="">
                          PHP Development
                        </a>
                      </li>
                      <li>
                        <a href={'# '} title="">
                          IOS Developer
                        </a>
                      </li>
                      <li>
                        <a href={'# '} title="">
                          Iphone Developer
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <h3 className="widgettitle widget-title">All Categories</h3>

                <div className="textwidget">
                  <ul className="footer-navigation">
                    <li>
                      <a href={'# '} title="">
                        Front-end Design
                      </a>
                    </li>
                    <li>
                      <a href={'# '} title="">
                        Android Developer
                      </a>
                    </li>
                    <li>
                      <a href={'# '} title="">
                        CMS Development
                      </a>
                    </li>
                    <li>
                      <a href={'# '} title="">
                        PHP Development
                      </a>
                    </li>
                    <li>
                      <a href={'# '} title="">
                        IOS Developer
                      </a>
                    </li>
                    <li>
                      <a href={'# '} title="">
                        Iphone Developer
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <h3 className="widgettitle widget-title">&nbsp;&nbsp;Connect Us</h3>
                <div className="textwidget">
                  <form className="footer-form">
                    <input type="text" className="form-control" placeholder="Your Name" />
                    <input type="text" className="form-control" placeholder="Email" />
                    <textarea className="form-control" placeholder="Message" />
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row copyright">
          <div className="container">
            <p>{/* <a href={"# "}>Design By Nguyễn Luân</a> */}Certified by</p>
            &nbsp;
            <img src={'/assets/img/gov-registed.png'} width="100" alt="gov-registed" />
          </div>
        </div>
      </footer>

      <div className="clearfix"></div>

      <div
        className="modal fade"
        id="signup"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="tab" role="tabpanel">
                <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" className="active">
                    <a href={'# '} role="tab" data-toggle="tab">
                      Sign In
                    </a>
                  </li>
                  <li role="presentation">
                    <a href={'# '} role="tab" data-toggle="tab">
                      Sign Up
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myModalLabel2">
                  <div role="tabpanel" className="tab-pane fade in active" id="login">
                    <img src={'/assets/img/Job-Listing.png'} className="img-responsive" alt="" />

                    <div className="subscribe wow fadeInUp">
                      <form className="form-inline" method="post">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Username"
                              required=""
                            />
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              placeholder="Password"
                              required=""
                            />

                            <div className="center">
                              <button type="submit" id="login-btn" className="submit-btn">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="register">
                    <img src={'/assets/img/Job-Listing.png'} className="img-responsive" alt="" />

                    <form className="form-inline" method="post">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Your Name"
                            required=""
                          />
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Your Email"
                            required=""
                          />
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Username"
                            required=""
                          />
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            required=""
                          />

                          <div className="center">
                            <button type="submit" id="subscribe" className="submit-btn">
                              Create Account
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footers;
