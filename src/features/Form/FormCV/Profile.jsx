import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

class Profile extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  // createAndDownloadPDF = () => {
  //   axios
  //     .post ('/create-pdf', this.props.values)
  //     .then (() => {
  //       axios
  //         .get ('fetch-pdf', {responseType: 'blob'})
  //         .then (res => {
  //           const pdfBlob = new Blob ([res.data], {type: 'application/pdf'});
  //           saveAs (pdfBlob, 'Resume.pdf');
  //         })
  //         .catch (err => {
  //           console.log (err);
  //         });
  //     })
  //     .catch (err => {
  //       console.log (err);
  //     });
  // };

  render() {
    const { values } = this.props;
    // const { classes } = this.props;
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
                      <input type="text" class="form-control" placeholder="First Name" />
                    </div>
                  </div>

                  <div class="col-md-6 col-sm-6">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Last Name" />
                    </div>
                  </div>

                  <div class="col-md-6 col-sm-6">
                    <div class="input-group">
                      <input type="date" class="form-control" placeholder="Date of Birth" />
                    </div>
                  </div>

                  <div class="col-md-6 col-sm-6">
                    <div class="input-group">
                      <input type="phone" class="form-control" placeholder="Phone" />
                    </div>
                  </div>

                  <div class="col-md-6 col-sm-6">
                    <div class="input-group">
                      <input type="email" class="form-control" placeholder="Email" />
                    </div>
                  </div>

                  <div class="col-md-6 col-sm-6">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Your Site" />
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
                      onClick={this.nextStep}
                      disabled
                      startIcon={<NavigateBeforeIcon />}
                    >
                      Back
                    </Button>
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
            <p className="text-center text-muted">Page 1 </p>
          </div>
        </div>

        {/* <CardContent>
          <div className="margin">
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="firstname"
                  label="First Name"
                  style={{ width: '80%' }}
                  required
                  value={values.firstname}
                  onChange={this.props.handleChange}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Last Name"
                  variant="outlined"
                  style={{ width: '80%' }}
                  name="lastname"
                  required
                  value={values.lastname}
                  onChange={this.props.handleChange}
                />
              </Grid>

              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Email"
                  variant="outlined"
                  name="email"
                  required
                  style={{ alignItems: 'left', width: '80%' }}
                  value={values.email}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item lg={6} xs={12} sm={12} md={6}>
                <TextField
                  margin="dense"
                  label="Phone Number"
                  variant="outlined"
                  name="phone"
                  style={{ alignItems: 'left', width: '80%' }}
                  value={values.phone}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Your Website"
                  variant="outlined"
                  name="website"
                  style={{ alignItems: 'left', width: '80%' }}
                  value={values.website}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LanguageIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="GitHub"
                  variant="outlined"
                  name="github"
                  style={{ alignItems: 'left', width: '80%' }}
                  value={values.github}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <GitHubIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Linked In"
                  variant="outlined"
                  name="linkedin"
                  style={{ alignItems: 'left', width: '80%' }}
                  value={values.linkedin}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LinkedInIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Twitter"
                  variant="outlined"
                  name="twitter"
                  style={{ alignItems: 'left', width: '80%' }}
                  value={values.twitter}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <TwitterIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Facebook"
                  variant="outlined"
                  name="facebook"
                  style={{ alignItems: 'left', width: '80%' }}
                  value={values.facebook}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <FacebookIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Instagram"
                  variant="outlined"
                  name="instagram"
                  style={{ alignItems: 'left', width: '80%' }}
                  value={values.instagram}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <InstagramIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Container className="margin">
              <Row>
                <Col lg={3} xs={0} />
                <Col lg={3} xs={5}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.nextStep}
                    disabled
                    startIcon={<NavigateBeforeIcon />}
                  >
                    Back
                  </Button>
                </Col>
                <Col lg={3} xs={5}>
                  <Button variant="contained" color="secondary" onClick={this.continue} endIcon={<NavigateNextIcon />}>
                    Next
                  </Button>
                </Col>
                <Col lg={3} xs={1} />
              </Row>
            </Container>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.createAndDownloadPDF}
              endIcon={<GetAppIcon />}
            >
              Generate PDF
            </Button>
          </div>
        </CardContent> */}
      </>
    );
  }
}

export default Profile;
