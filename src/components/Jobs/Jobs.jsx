import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Job from "./Job/Job";
import useStyles from "./styles";

const Jobs = () => {
  const jobs = useSelector((state) => state.jobs);
  const classes = useStyles();

  console.log(jobs);

  return !jobs.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {jobs.map((job) => (
        <Grid key={job._id} item xs={12} sm={6} md={6}>
          <Job job={job} />
        </Grid>

        // <ul key={job._id}>
        //   <li>{job.careers.careerName}</li>
        // </ul>
      ))}
    </Grid>
  );
};

export default Jobs;
