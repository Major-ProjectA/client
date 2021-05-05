import React, { Component } from 'react';

class JobHot extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="main-heading">
                <p>Most View Jobs</p>

                <h2>
                  Hot & Featured <span>Jobs</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="popular-jobs-container">
                <div className="popular-jobs-box">
                  <span className="popular-jobs-status bg-success">hourly</span>
                  <h4 className="flc-rate">$17/hr</h4>

                  <div className="popular-jobs-box">
                    <div className="popular-jobs-box-detail">
                      <h4>Google Inc</h4>
                      <span className="desination">Software Designer</span>
                    </div>
                  </div>
                  <div className="popular-jobs-box-extra">
                    <ul>
                      <li>Php</li>
                      <li>Android</li>
                      <li>Html</li>
                      <li className="more-skill bg-primary">+3</li>
                    </ul>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui.</p>
                  </div>
                </div>
                <a href={'# '} className="btn btn-popular-jobs bt-1">
                  View Detail
                </a>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="popular-jobs-container">
                <div className="popular-jobs-box">
                  <span className="popular-jobs-status bg-warning">Monthly</span>
                  <h4 className="flc-rate">$570/Mo</h4>

                  <div className="popular-jobs-box">
                    <div className="popular-jobs-box-detail">
                      <h4>Duff Beer</h4>
                      <span className="desination">Marketting</span>
                    </div>
                  </div>
                  <div className="popular-jobs-box-extra">
                    <ul>
                      <li>Php</li>
                      <li>Android</li>
                      <li>Html</li>
                      <li className="more-skill bg-primary">+3</li>
                    </ul>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui.</p>
                  </div>
                </div>
                <a href={'# '} className="btn btn-popular-jobs bt-1">
                  View Detail
                </a>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="popular-jobs-container">
                <div className="popular-jobs-box">
                  <span className="popular-jobs-status bg-info">Weekly</span>
                  <h4 className="flc-rate">$200/We</h4>

                  <div className="popular-jobs-box">
                    <div className="popular-jobs-box-detail">
                      <h4>Cyberdyne Systems</h4>
                      <span className="desination">Human Resource</span>
                    </div>
                  </div>
                  <div className="popular-jobs-box-extra">
                    <ul>
                      <li>Php</li>
                      <li>Android</li>
                      <li>Html</li>
                      <li className="more-skill bg-primary">+3</li>
                    </ul>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui.</p>
                  </div>
                </div>
                <a href={'# '} className="btn btn-popular-jobs bt-1">
                  View Detail
                </a>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="text-center">
                <a href="# " className="btn btn-primary">
                  Load More
                </a>
              </div>
            </div>
          </div> */}
        </div>
        <div className="clearfix"></div>
        <br />
        <br />
      </>
    );
  }
}

export default JobHot;
