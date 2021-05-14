import React, { Component } from 'react';
import Profile from './Profile';
import Education from './Education';
import Project from './Project';
import Experience from './Experience';
import Extras from './Extras';
import Confirm from './Confirm';
import axios from 'axios';

export class Resume extends Component {
  state = {
    step: 1,
    //Personal Profile Details...
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    dob: '',
    address: '',

    // Education Information
    college: '',
    fromyear: '',
    toyear: '',
    qualification: '',
    description: '',

    // Project Information...
    title: '',
    linkProject: '',
    projectDescription: '',

    // Experience Information
    institute: '',
    position: '',
    duration: '',
    experienceDescription: '',

    // Extra Information
    skill1: '',
    skill2: '',
    interest1: '',
    interest2: '',
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // handleChange = ({ target: { value, name } }) => {
  //   this.setState({ [name]: value });
  // };
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleSubmit = () => {
    const {
      // Profile-Information
      firstname,
      lastname,
      email,
      phone,
      dob,
      address,

      // Education Information
      college,
      fromyear,
      toyear,
      qualification,
      description,

      // Project Information...
      title,
      linkProject,
      projectDescription,

      // Experience Information
      institute,
      position,
      duration,
      experienceDescription,

      // Extra Information
      skill1,
      skill2,

      interest1,
      interest2,

    } = this.state;
    axios.post('http://localhost:5000/api/cvs', this.state)
  }

  render() {
    const { step } = this.state;
    const {
      // Profile-Information
      firstname,
      lastname,
      email,
      phone,
      dob,
      address,

      // Education Information
      college,
      fromyear,
      toyear,
      qualification,
      description,

      // Project Information...
      title,
      linkProject,
      projectDescription,

      // Experience Information
      institute,
      position,
      duration,
      experienceDescription,

      // Extra Information
      skill1,
      skill2,
      interest1,
      interest2,
    } = this.state;
    const values = {
      // Profile-Information
      firstname,
      lastname,
      email,
      phone,
      dob,
      address,

      // Education Information
      college,
      fromyear,
      toyear,
      qualification,
      description,

      // Project Information...
      title,
      linkProject,
      projectDescription,

      // Experience Information
      institute,
      position,
      duration,
      experienceDescription,

      // Extra Information
      skill1,
      skill2,
      interest1,
      interest2,
    };
    switch (step) {
      case 1:
        return (
          <Profile 
            nextStep={this.nextStep} 
            handleChange={this.handleChange} 
            values={values} 
          />
        );
      case 2:
        return (

              <Education
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />

        );
      case 3:
        return (
              <Project
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />

        );
      case 4:
        return (

              <Experience
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />

        );
      case 5:
        return (

              <Extras 
                nextStep={this.nextStep}
                prevStep={this.prevStep} 
                handleChange={this.handleChange} 
                values={values} />

        );
      case 6:
        return (
          <Confirm
            prevStep={this.prevStep}
            handleSubmit={this.handleSubmit}
            values={values}
          />
        );
      default:
        return <div />;
    }
  }
}

export default Resume;
