import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { GlobalState } from '../../../GlobalState';
import Loading from '../../../features/Loading';
import Swal from "sweetalert2"
// import { useHistory, useParams } from 'react-router-dom';

function CreateJob() {
  const state = useContext(GlobalState);

  const [job, setJob] = useState({
    jobId: '',
    startDay: '',
    endDay: '',
    position: '',
    salary: {
      from: 0,
      to: 0,
    },
    category: '',
    workingTime: '',
    detail: '',
    requirement: '',
    experience: '',
    certification: '',
    benefit: '',
    numofRecruit: 0,
    nameCom: '',
    siteCom: '',
    thumbnail: '',
    location: {
      street: '',
      district: '',
      city: '',
    },
    contact: {
      contactName: 'Nguyen The Luan',
      contactEmail: 'nguyenluan.work@gmail.com',
      contactAddress: 'Ho Chi Minh',
      contactPhone: '090977xxxx',
    },
  });

  const [categories] = state.categoriesAPI.categories;
  const [photos, setPhotos] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      //console.log(file);

      if (!file) return (Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "File not existed!"
      }));
      if (file.size > 1024 * 1024) return (Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Size is too large!"
      }));
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') return (Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "File format is incorrect!"
      }));

      let formData = new FormData();
      formData.append('file', file);

      setLoading(true);
      const res = await axios.post('/api/photo/upload', formData);

      setLoading(false);
      setPhotos(res.data);

      // console.log(res);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Something went wrong, please try again."
      })
    }
  };

  const handleDestroy = async () => {
    try {
      await axios.post('/api/photo/destroy', { public_id: photos.public_id });
      setPhotos(false);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "No image upload!"
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!photos) 
        return (
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "File not existed!"
          })
        );
      // await axios.post('/api/jobs', { ...job }).then((res) => {
      //   console.log(res.data);
      // });
      await axios.post('/api/jobs', { ...job });
      Swal.fire('Awesome!', "Job created and wait for admin to approve the post... 🎉🎉", 'success').then(
        (result) => {
          if (result.isConfirmed || result.isDismissed) {
            
          }
        }
      );
      clear();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Something went wrong, please try again."
      })
    }
  };

  const clear = () => {
    setJob({
      jobId: '',
      startDay: '',
      endDay: '',
      position: '',
      salary: { to: 0, from: 0 },
      category: '',
      workingTime: '',
      detail: '',
      requirement: '',
      experience: '',
      certification: '',
      benefit: '',
      numofRecruit: 0,
      nameCom: '',
      siteCom: '',
      thumbnail: '',
      location: {
        street: '',
        district: '',
        city: '',
      },
      contact: {
        contactName: 'Nguyen The Luan',
        contactEmail: 'nguyenluan.work@gmail.com',
        contactAddress: 'Ho Chi Minh',
        contactPhone: '090977xxxx',
      },
    });
  };

  const styleUpload = {
    display: photos ? 'block' : 'none',
  };

  // useEffect(() => {
  //   return () => {};
  // }, []);

  return (
    <>
      <section
        class="inner-header-title blank"
        style={{
          backgroundImage: `URL("https://www.mediafire.com/convkey/94a5/ld2xj8f54j7colg6g.jpg")`,
        }}
      >
        <div class="container">
          <h1>Create Job</h1>
        </div>
      </section>

      <form onSubmit={handleSubmit}>
        <div class="detail-desc section">
          <div class="container white-shadow">
            <div class="row">
              <div class="detail-pic js">
                <div class="box">
                  <input
                    type="file"
                    name="upload-pic[]"
                    id="upload-pic"
                    className="inputfile"
                    onChange={handleUpload}
                  />
                  {loading ? (
                    <div id="file_img">
                      <Loading />
                    </div>
                  ) : (
                    <>
                      <label htmlFor="upload-pic">
                        <i class="fa fa-upload" aria-hidden="true" style={{ cursor: 'pointer', fontSize: '20px' }}></i>
                      </label>

                      <div style={styleUpload}>
                        <img
                          src={photos ? photos.url : ''}
                          style={{
                            // overflow: 'hidden',
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            display: 'block',
                            zIndex: '1',
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div class="add-feild">
              <div class="row bottom-mrg">
                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>Job ID</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      required
                      value={job.jobId}
                      onChange={(e) => setJob({ ...job, jobId: e.target.value })}
                    />
                  </div>
                </div>

                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>Start Day</label>
                    <input
                      id="startDay"
                      type="date"
                      class="form-control"
                      placeholder=""
                      required
                      value={job.startDay}
                      onChange={(e) => setJob({ ...job, startDay: e.target.value })}
                    />
                  </div>
                </div>

                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>End Day</label>
                    <input
                      id="endDay"
                      type="date"
                      class="form-control"
                      placeholder=""
                      required
                      value={job.endDay}
                      onChange={(e) => setJob({ ...job, endDay: e.target.value })}
                    />
                  </div>
                </div>

                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>Position</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Please input your position"
                      required
                      value={job.position}
                      onChange={(e) => setJob({ ...job, position: e.target.value })}
                    />
                  </div>
                </div>

                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>Salary From</label>
                    <input
                      type="number"
                      class="form-control"
                      min="0"
                      placeholder="Currency unit: $"
                      required
                      value={job.salary.from}
                      onChange={(e) =>
                        setJob((prevJob) => ({
                          ...prevJob,
                          salary: { ...prevJob.salary, from: e.target.value },
                        }))
                      }
                    />
                  </div>
                </div>

                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>Salary To</label>
                    <input
                      type="number"
                      class="form-control"
                      min="0"
                      placeholder="Currency unit: $"
                      required
                      value={job.salary.to}
                      onChange={(e) =>
                        setJob((prevJob) => ({
                          ...prevJob,
                          salary: { ...prevJob.salary, to: e.target.value },
                        }))
                      }
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <label>Category</label>
                  <div class="input-group">
                    <select
                      class="form-control input-lg"
                      required
                      value={job.category}
                      onChange={(e) => setJob({ ...job, category: e.target.value })}
                    >
                      <option value="">Please select a category</option>
                      {categories.map((category) => (
                        <option value={category.career.careerName} key={category._id}>
                          {category.career.careerName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <label>Working Time</label>
                    <select
                      class="form-control input-lg"
                      required
                      value={job.workingTime}
                      onChange={(e) => setJob({ ...job, workingTime: e.target.value })}
                    >
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Freelancer">Freelancer</option>
                      <option value="Internship">Internship</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="row no-padd">
              <div class="detail pannel-footer">
                <div class="col-md-12 col-sm-12">
                  <div class="detail-pannel-footer-btn pull-right">
                    <button
                      href="#"
                      class="footer-btn choose-cover"
                      onClick={handleDestroy}
                      style={{
                        backgroundColor: '#3DB810',
                        border: 'none',
                        color: 'white',
                        padding: '15px 22px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontSize: '16px',
                      }}
                    >
                      Change Cover Image
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="full-detail">
          <div class="container">
            <div class="row bottom-mrg extra-mrg">
              <h2 class="detail-title">Job Requirement</h2>
              <div class="col-md-12 col-sm-12">
                <label>Detail</label>
                <textarea
                  class="form-control"
                  placeholder="Keep the content short and easy to understand..."
                  required
                  value={job.detail}
                  onChange={(e) => setJob({ ...job, detail: e.target.value })}
                ></textarea>
              </div>

              <div class="col-md-12 col-sm-12">
                <label>Requirement</label>
                <textarea
                  class="form-control textarea"
                  placeholder="Requirement"
                  required
                  value={job.requirement}
                  onChange={(e) => setJob({ ...job, requirement: e.target.value })}
                ></textarea>
              </div>

              <div class="col-md-12 col-sm-12">
                <label>Experience</label>
                <select
                  class="form-control input-lg"
                  required
                  value={job.experience}
                  onChange={(e) => setJob({ ...job, experience: e.target.value })}
                >
                  <option value="No experience">No experience</option>
                  <option value="Less than 1 year">Less than 1 year</option>
                  <option value="1 year">1 year</option>
                  <option value="2 year">2 year</option>
                  <option value="3 year">3 year</option>
                  <option value="More than 3 years">More than 3 years</option>
                </select>
              </div>

              <div class="col-md-12 col-sm-12">
                <label>Certification</label>
                <textarea
                  class="form-control textarea"
                  placeholder="Certification"
                  required
                  value={job.certification}
                  onChange={(e) => setJob({ ...job, certification: e.target.value })}
                ></textarea>
              </div>

              <div class="col-md-12 col-sm-12">
                <label>Benefit</label>
                <textarea
                  class="form-control textarea"
                  placeholder="About Company"
                  required
                  value={job.benefit}
                  onChange={(e) => setJob({ ...job, benefit: e.target.value })}
                ></textarea>
              </div>

              <div class="col-md-12 col-sm-12">
                <label>Number of Recruit</label>
                <input
                  placeholder="Number of recruit"
                  type="number"
                  min="0"
                  class="form-control"
                  required
                  value={job.numofRecruit}
                  onChange={(e) => setJob({ ...job, numofRecruit: e.target.value })}
                />
              </div>
            </div>

            <div class="row bottom-mrg extra-mrg">
              <h2 class="detail-title">Company Information</h2>

              <div class="col-md-4 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-flag"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Company Name"
                    required
                    value={job.nameCom}
                    onChange={(e) => setJob({ ...job, nameCom: e.target.value })}
                  />
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-globe"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Company Site"
                    required
                    value={job.siteCom}
                    onChange={(e) => setJob({ ...job, siteCom: e.target.value })}
                  />
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fas fa-image"></i>
                  </span>
                  <input
                    type="url"
                    class="form-control"
                    placeholder="Company Thumnail"
                    required
                    value={job.thumbnail}
                    onChange={(e) => setJob({ ...job, thumbnail: e.target.value })}
                  />
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fas fa-road"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Street"
                    required
                    value={job.location.street}
                    onChange={(e) =>
                      setJob((prevJob) => ({
                        ...prevJob,
                        location: { ...prevJob.location, street: e.target.value },
                      }))
                    }
                  />
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fas fa-street-view"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="District"
                    required
                    value={job.location.district}
                    onChange={(e) =>
                      setJob((prevJob) => ({
                        ...prevJob,
                        location: { ...prevJob.location, district: e.target.value },
                      }))
                    }
                  />
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fas fa-building"></i>
                  </span>
                  <select
                    class="form-control input-lg"
                    required
                    value={job.location.city}
                    onChange={(e) =>
                      setJob((prevJob) => ({
                        ...prevJob,
                        location: { ...prevJob.location, city: e.target.value },
                      }))
                    }
                  >
                    <option value="">All City</option>
                    <option value="Ho Chi Minh">Ho Chi Minh</option>
                    <option value="Ha Noi">Ha Noi</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row bottom-mrg extra-mrg">
              <h2 class="detail-title">Contact</h2>
              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-facebook"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Contact Name"
                    required
                    value={job.contact.contactName}
                    onChange={(e) =>
                      setJob((preJob) => ({
                        ...preJob,
                        contact: { ...preJob, contactName: e.target.value },
                      }))
                    }
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Contact Email"
                    required
                    value={job.contact.contactEmail}
                    onChange={(e) =>
                      setJob((preJob) => ({
                        ...preJob,
                        contact: { ...preJob, contactEmail: e.target.value },
                      }))
                    }
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Contact Address"
                    required
                    value={job.contact.contactAddress}
                    onChange={(e) =>
                      setJob((preJob) => ({
                        ...preJob,
                        contact: { ...preJob, contactAddress: e.target.value },
                      }))
                    }
                  />
                </div>
              </div>
              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Contact Phone"
                    required
                    value={job.contact.contactPhone}
                    onChange={(e) =>
                      setJob((preJob) => ({
                        ...preJob,
                        contact: { ...preJob, contactPhone: e.target.value },
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="col-md-12 col-sm-12">
          <button class="btn btn-success btn-primary small-btn">Submit your company</button>
        </div>
      </form>
    </>
  );
}

export default CreateJob;
