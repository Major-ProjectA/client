import "./App.css";
import React, { useState, useEffect } from "react";
// import Jobs from "./pages/Jobs";
import Home from "./pages/Home";
// import Jobs from "./pages/Jobs";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Jobs from "./pages/Jobs";
import JobList from "./features/JobList";

// import FormJob from "../src/features/FormJob";

// import Navbars from "./components/Navbars";
// import FormLogin from "./components/FormLogin";
// import FormRegister from "./components/FormRegister";
// import Footers from "./components/Footers";

import { Route, Switch, Redirect } from "react-router-dom";

import { useDispatch } from "react-redux";

// import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
// import memories from "./assets/img/memories.png";

import { getJobs } from "./actions/job-actions.jsx";

// import Jobs from "./components/Jobs/Jobs";
// import Form from "./components/Form/Form";
// import useStyles from "./styles";

const App = () => {
  const [currentId] = useState(0);
  const dispatch = useDispatch();
  // const classes = useStyles();

  useEffect(() => {
    dispatch(getJobs());
  }, [currentId, dispatch]);

  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/job-list" component={JobList} exact />

        <Route path="/register" component={Register} exact />

        <Route path="/login" component={Login} exact />

        <Route component={Error} />
      </Switch>

      {/* <Error /> */}
      {/* <Jobs /> */}
      {/* <Login />
      <Register /> */}
      {/* <Navbars />
      <FormLogin />
      <FormRegister />
      <Footers /> */}

      {/* <Container maxidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="12" align="center">
            JOB LISTING
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="60"
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <h1>Show List Job</h1>
                <Jobs />
              </Grid>
              <Grid item xs={12} sm={4}>
                <h1>Control</h1>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container> */}
    </div>
  );
};

export default App;
