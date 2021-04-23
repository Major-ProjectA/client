// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

// import { createJob } from '../../actions/job-actions';

// function FormJob() {
//   const [jobAddData, setjobAddData] = useState({
//     imgCom: '',
//     location: {
//       street: '',
//       district: '',
//       city: '',
//     },
//     nameCom: '',
//     position: '',
//     salary: {
//       from: '',
//       to: '',
//     },
//     workingTime: '',
//   });

//   console.log(jobAddData);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(createJob(jobData));
//     console.log('Đã Post');
//   };

//   return (
//     <>
//       <br /> <br /> <br /> <br /> <br />
//       <section className="full-detail">
//         <div className="container">
//           <div className="row bottom-mrg extra-mrg">
//             <form onSubmit={handleSubmit}>
//               <h2 className="detail-title">Company Information</h2>
//               <div className="col-md-6 col-sm-6">
//                 <div className="input-group">
//                   <span className="input-group-addon">
//                     <i className="fa fa-flag"></i>
//                   </span>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="imgCom"
//                     value={jobAddData.imgCom}
//                     onChange={(e) => setjobAddData({ ...jobAddData, imgCom: e.target.value })}
//                   />
//                 </div>
//                 <div className="input-group">
//                   <span className="input-group-addon">
//                     <i className="fa fa-flag"></i>
//                   </span>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="street"
//                     value={jobAddData.location.street}
//                     onChange={(e) => setjobAddData({ ...jobAddData, location: { street: e.target.value } })}
//                   />
//                 </div>
//                 <div className="input-group">
//                   <span className="input-group-addon">
//                     <i className="fa fa-flag"></i>
//                   </span>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="district"
//                     value={jobAddData.location.district}
//                     onChange={(e) => setjobAddData({ ...jobAddData, location: { district: e.target.value } })}
//                   />
//                 </div>
//                 <div className="input-group">
//                   <span className="input-group-addon">
//                     <i className="fa fa-flag"></i>
//                   </span>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="city"
//                     value={jobAddData.location.city}
//                     onChange={(e) => setjobAddData({ ...jobAddData, location: { city: e.target.value } })}
//                   />
//                 </div>
//                 <div className="input-group">
//                   <span className="input-group-addon">
//                     <i className="fa fa-flag"></i>
//                   </span>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="namCom"
//                     value={jobAddData.nameCom}
//                     onChange={(e) => setjobAddData({ ...jobAddData, nameCom: e.target.value })}
//                   />
//                 </div>
//                 <div className="input-group">
//                   <span className="input-group-addon">
//                     <i className="fa fa-flag"></i>
//                   </span>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="position"
//                     value={jobAddData.position}
//                     onChange={(e) => setjobAddData({ ...jobAddData, position: e.target.value })}
//                   />
//                 </div>
//                 <div className="input-group">
//                   <span className="input-group-addon">
//                     <i className="fa fa-flag"></i>
//                   </span>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="from"
//                     value={jobAddData.salary.from}
//                     onChange={(e) => setjobAddData({ ...jobAddData, salary: { from: e.target.value } })}
//                   />
//                 </div>
//                 <div className="input-group">
//                   <span className="input-group-addon">
//                     <i className="fa fa-flag"></i>
//                   </span>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="to"
//                     value={jobAddData.salary.to}
//                     onChange={(e) => setjobAddData({ ...jobAddData, salary: { to: e.target.value } })}
//                   />
//                 </div>
//                 <div className="input-group">
//                   <span className="input-group-addon">
//                     <i className="fa fa-flag"></i>
//                   </span>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="workingTimeS"
//                     value={jobAddData.workingTime}
//                     onChange={(e) => setjobAddData({ ...jobAddData, workingTime: e.target.value })}
//                   />
//                 </div>
//               </div>

//               {/* <div className="col-md-6 col-sm-6">
//                 <div className="input-group">
//                   <span className="input-group-addon">
//                     <i className="fa fa-pencil"></i>
//                   </span>
//                   <input type="text" className="form-control" placeholder="Company Tagline" />
//                 </div>
//               </div> */}

//               {/* <div className="col-md-6 col-sm-6">
//                 <div className="input-group">
//                   <span className="input-group-addon">
//                     <i className="fa fa-envelope"></i>
//                   </span>
//                   <input type="text" className="form-control" placeholder="Company Email" />
//                 </div>
//               </div> */}

//               {/* <div className="col-md-6 col-sm-6">
//                 <div className="input-group">
//                   <span className="input-group-addon">
//                     <i className="fa fa-map-marker"></i>
//                   </span>
//                   <input type="text" className="form-control" placeholder="Local E.g. It Park New" />
//                 </div>
//               </div> */}

//               {/* <div className="col-md-6 col-sm-6">
//                 <div className="input-group">
//                   <span className="input-group-addon">
//                     <i className="fa fa-globe"></i>
//                   </span>
//                   <input type="text" className="form-control" placeholder="Website" />
//                 </div>
//               </div> */}

//               {/* <div className="col-md-6 col-sm-6">
//                 <div className="input-group">
//                   <span className="input-group-addon">
//                     <i className="fa fa-birthday-cake"></i>
//                   </span>
//                   <input
//                     type="text"
//                     id="company-dob"
//                     // data-lang="en"
//                     // data-large-mode="true"
//                     // data-min-year="2017"
//                     // data-max-year="2020"
//                     // data-disabled-days="08/17/2017,08/18/2017"
//                     // data-id="datedropper-0"
//                     // data-theme="my-style"
//                     placeholder="Founding"
//                     className="form-control"
//                     readonly=""
//                   />
//                 </div>
//               </div> */}
//             </form>
//           </div>

//           {/* <div className="row bottom-mrg extra-mrg">
//             <form>
//               <h2 className="detail-title">Social Profile</h2>
//               <div className="col-md-6 col-sm-6">
//                 <div className="input-group">
//                   <span className="input-group-addon iconfb">
//                     <i className="fa fa-facebook"></i>
//                   </span>
//                   <input type="text" className="form-control" placeholder="Facebook Link" />
//                 </div>
//               </div>

//               <div className="col-md-6 col-sm-6">
//                 <div className="input-group">
//                   <span className="input-group-addon icongg">
//                     <i className="fa fa-google-plus" style={{ width: 5, paddingRight: 20 }}></i>
//                   </span>
//                   <input type="text" className="form-control" placeholder="GooglePlus Link" />
//                 </div>
//               </div>

//               <div className="col-md-6 col-sm-6">
//                 <div className="input-group">
//                   <span className="input-group-addon icontw">
//                     <i className="fa fa-twitter"></i>
//                   </span>
//                   <input type="text" className="form-control" placeholder="Twitter Link" />
//                 </div>
//               </div>

//               <div className="col-md-6 col-sm-6">
//                 <div className="input-group">
//                   <span className="input-group-addon iconig">
//                     <i className="fa fa-instagram"></i>
//                   </span>
//                   <input type="text" className="form-control" placeholder="Instagram Link" />
//                 </div>
//               </div>

//               <div className="col-md-6 col-sm-6">
//                 <div className="input-group">
//                   <span className="input-group-addon">
//                     <i className="fa fa-linkedin"></i>
//                   </span>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Profile Link"
//                   />
//                 </div>
//               </div>

//               <div className="col-md-6 col-sm-6">
//                 <div className="input-group">
//                   <span className="input-group-addon iconoth">
//                     <i className="fa fa-dribbble"></i>
//                   </span>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Others Link"
//                   />
//                 </div>
//               </div>
//             </form>
//           </div> */}

//           {/* <div className="row bottom-mrg extra-mrg">
//             <form>
//               <h2 className="detail-title">Job Requirement</h2>
//               <div className="col-md-12 col-sm-12">
//                 <textarea className="form-control textarea" placeholder="About Company" width="150px"></textarea>
//               </div>
//               <div className="col-md-12 col-sm-12">
//                 <button className="btn btn-success btn-primary small-btn">Submit your company</button>
//               </div>
//             </form>
//           </div> */}
//         </div>
//         <button variant="contained" color="primary" size="large" type="submit" fullWidth>
//           Submit
//         </button>
//       </section>
//     </>
//   );
// }

// export default FormJob;
