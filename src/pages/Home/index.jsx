import React, { Component } from 'react';

import Navbars from '../../components/Navbars';
import Banner from '../../components/Banner';
import Category from '../../components/Category';
import JobHot from '../../components/JobHot';
import Testimonial from '../../components/Testimonial';
import Footers from '../../components/Footers';

// import { useSelector } from "react-redux";

class Home extends Component {
  render() {
    return (
      <>
        <div className="Loader"></div>
        <div className="wrapper">
          <Navbars />
          <Banner />
          <Category />
          <JobHot />
          <Testimonial />
          <Footers />
        </div>
      </>
    );
  }
}

export default Home;
