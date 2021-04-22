// import React, { useState } from "react";
// import { TextField, Button, Typography, Paper } from "@material-ui/core";

// import { useDispatch } from "react-redux";
// import useStyles from "./styles";

// import { createJob } from "../../actions/job-actions";

// const Form = () => {
//   const [jobData, setJobData] = useState({
//     career: {
//       careerName: "",
//       icon: "",
//     },

//     salary: 0,
//     request: "",
//   });

//   const classes = useStyles();
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(createJob(jobData));

//     clear();
//   };

//   const clear = () => {};
//   console.log(jobData);
//   return (
//     <Paper className={classes.paper}>
//       <form
//         autoComplete="off"
//         noValidate
//         className={`${classes.root} ${classes.form}`}
//         onSubmit={handleSubmit}
//       >
//         <Typography variant="h6">Creating List Job</Typography>
//         {/* <TextField
//           name="career Name"
//           variant="outlined"
//           label="Career Name"
//           fullWidth
//           value={jobData.career.careerName}
//           onChange={(e) =>
//             setJobData({ ...jobData, career: { careerName: e.target.value } })
//           }
//         /> */}

//         {/* <TextField
//           name="salary"
//           variant="outlined"
//           label="Salary"
//           fullWidth
//           value={jobData.salary}
//           onChange={(e) => setJobData({ ...jobData, salary: e.target.value })}
//         /> */}

//         {/* <TextField
//           name="request"
//           variant="outlined"
//           label="Request"
//           fullWidth
//           rows={4}
//           value={jobData.request}
//           onChange={(e) => setJobData({ ...jobData, request: e.target.value })}
//         /> */}

//         <Button
//           className={classes.buttonSubmit}
//           variant="contained"
//           color="primary"
//           size="large"
//           type="submit"
//           fullWidth
//         >
//           Submit
//         </Button>
//       </form>
//     </Paper>
//   );
// };

// export default Form;
