import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

class Profile extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <section class="inner-header-title blank">
          <div class="container">
            <h1>Create Profile</h1>
          </div>
        </section>
  
        <div class="section detail-desc">
          <div class="container white-shadow">
            <div class="row">
              <div class="detail-pic js">
                <div class="box">
                  <input type="file" name="upload-pic[]" id="upload-pic" class="inputfile" />
                  <label for="upload-pic">
                    <i class="fa fa-upload" aria-hidden="true"></i>
                  </label>
                </div>
              </div>
            </div>
  
            <div className="newcontainer" style={{ marginLeft: '-1%' }}>
              <div class="row bottom-mrg">
                <form class="add-feild">
                  <div class="col-md-6 col-sm-6">
                    <div class="input-group">
                      <input 
                        type="text" 
                        class="form-control" 
                        placeholder="First Name"
                        defaultValue={values.firstname}
                        onChange={handleChange('firstname')}
                      />
                    </div>
                  </div>
  
                  <div class="col-md-6 col-sm-6">
                    <div class="input-group">
                      <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Last Name"
                        defaultValue={values.lastname}
                        onChange={handleChange('lastname')}
                      />
                    </div>
                  </div>
  
                  <div class="col-md-6 col-sm-6">
                    <div class="input-group">
                      <input 
                        type="date" 
                        class="form-control" 
                        placeholder="Date of Birth" 
                        defaultValue={values.dob}
                        onChange={handleChange('dob')}
                      />
                    </div>
                  </div>
  
                  <div class="col-md-6 col-sm-6">
                    <div class="input-group">
                      <input 
                        type="phone" 
                        class="form-control" 
                        placeholder="Phone"
                        defaultValue={values.phone}
                        onChange={handleChange('phone')}
                      />
                    </div>
                  </div>
  
                  <div class="col-md-6 col-sm-6">
                    <div class="input-group">
                      <input 
                        type="email" 
                        class="form-control" 
                        placeholder="Email" 
                        defaultValue={values.email}
                        onChange={handleChange('email')}
                      />
                    </div>
                  </div>
  
                  <div class="col-md-6 col-sm-6">
                    <div class="input-group">
                      <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Address" 
                        defaultValue={values.address}
                        onChange={handleChange('address')}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="row no-padd">
              <div class="detail pannel-footer">
                <div class="col-md-12 col-sm-12">
                  <div class="detail-pannel-footer-btn pull-right">
                    {/* <a href="#" class="footer-btn choose-cover">
                      Choose Cover Image
                    </a> */}                   
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={this.continue}
                      endIcon={<NavigateNextIcon />}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-muted">Step 1 / 6</p>
          </div>
        </div>
      </>
    );
  }
};

export default Profile;
