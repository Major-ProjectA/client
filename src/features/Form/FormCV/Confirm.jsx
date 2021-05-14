import React, {Component} from 'react';
import {TextField, Button, Container, Divider, List, ListItem, ListItemText} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Row, Col} from 'react-bootstrap';
import {Paper, withStyles, Grid} from '@material-ui/core';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 1.5,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

class Confirm extends Component {
  submit = e => {
    e.preventDefault ();
    this.props.handleSubmit ();
  };

  back = e => {
    e.preventDefault ();
    this.props.prevStep ();
  };

  render () {
    const {
        values: {
            firstname, 
            lastname, 
            email, 
            phone,
            dob,
            address,
            college, 
            fromyear,
            toyear,
            qualification,
            description,
            institute,
            position,
            duration,
            experienceDescription,
            title,
            linkProject,
            projectDescription,
            skill1,
            skill2,
            interest1,
            interest2
        }
    } = this.props;
    const {classes} = this.props;

    return (
      <Paper className={classes.padding}>
        <Card>
          <CardHeader title="Extra Details" />
        </Card>
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid
                item
                xs={12}
                lg={4}
                alignItems="flex-end"
                alignContent="flex-end"
              >
                <h5>
                  <CheckCircleIcon />
                  <span className="pl-3">Confirm</span>
                </h5>
              </Grid>
              <Grid item xs={0} lg={8} />
              <br />
              <List>
                <ListItem>
                    <ListItemText primary="First Name" secondary={firstname} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Last Name" secondary={lastname} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Email" secondary={email} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Phone Number" secondary={phone} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Date Of Birth" secondary={dob} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Address" secondary={address} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="College" secondary={college} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="From start" secondary={fromyear} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="To end" secondary={toyear} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Qualification" secondary={qualification} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Description" secondary={description} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Institute" secondary={institute} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Position" secondary={position} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Duration" secondary={duration} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Exp Description" secondary={experienceDescription} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Title" secondary={title} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Link Project" secondary={linkProject} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Project Description" secondary={projectDescription} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Skill 1" secondary={skill1} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Skill 2" secondary={skill2} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Interest 1" secondary={interest1} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Interest 2" secondary={interest2} />
                </ListItem>
              </List>
            </Grid>
          </div>
        </CardContent>
        <Container className={classes.margin}>
          <Row>
            <Col xs={4} />
            <Col xs={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.back}
                startIcon={<NavigateBeforeIcon />}
              >
                Back
              </Button>
            </Col>
            <Col xs={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.submit}
              >
                Submit
              </Button>
            </Col>
            <Col xs={4} />
          </Row>
          <br />
        </Container>
        <p className="text-center text-muted">Page 5</p>
      </Paper>
    );
  }
}

export default withStyles (styles) (Confirm);