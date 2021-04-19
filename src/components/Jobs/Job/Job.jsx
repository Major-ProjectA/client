import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
// import DeleteIcon from "@material-ui/icons/Delete";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import moment from "moment";

// import { useDispatch } from "react-redux";
import useStyles from "./styles";

const Job = ({ job }) => {
  // const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {job.career.careerName}
      </Typography>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {job.salary}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {job.request}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Job;
