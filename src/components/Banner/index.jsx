import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <>
        <div
          className="simple-banner"
          style={{
            backgroundImage: `url("https://www.mediafire.com/convkey/5fe3/6526w0entfizrt46g.jpg")`,
          }}
        >
          <div className="container">
            <div className="simple-banner-caption">
              <div className="col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 banner-text">
                <h3>We Are Available On</h3>

                <h1>
                  Job <span>Listing</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </>
    );
  }
}

export default Banner;
