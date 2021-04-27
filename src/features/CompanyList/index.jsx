import React, { useEffect, useState } from 'react';

import Navbars from '../../components/Navbars';
import Footer from '../../components/Footers';
import companyApi from '../../api/companyApi';

const JobList = () => {
  const [fetchCompanies, setFetchCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const companylist = await companyApi.getAllCompany();
      // console.log(companylist);

      setFetchCompanies(companylist);
    };
    fetchCompanies();
  }, [companyApi]);

  return (
    <>
      <Navbars />
      <br /> <br />
      <section
        class="inner-header-title"
        style={{
          backgroundImage: `URL("https://www.mediafire.com/convkey/3256/oy9yrpyhvvwgu8b6g.jpg")`,
        }}
      >
        <div class="container">
          <h1>Browse Companies</h1>
        </div>
      </section>
      {/* <div class="clearfix"></div> */}
      <section class="brows-job-category">
        <div class="container">
          <div class="row extra-mrg">
            <div class="wrap-search-filter">
              <form>
                <div className="col-md-3 col-sm-6">
                  <input type="text" className="form-control" placeholder="Skills, Designations, Keyword" />
                </div>

                <div className="col-md-3 col-sm-6">
                  <select id="choose-city" className="form-control">
                    <option>All City</option>
                    <option value="HCM">Ho Chi Minh</option>
                    <option value="HN">Ha Noi</option>
                    {/* <option value="AG">An Giang</option>
                    <option value="BRVT">Bà Rịa - Vũng Tàu</option>
                    <option value="BC">Bắc Cạn</option>
                    <option value="BG">Bắc Giang</option>
                    <option value="BL">Bạc Liêu</option>
                    <option value="BN">Bắc Ninh</option>
                    <option value="BT">Bến Tre</option>
                    <option value="BD">Bình Dương</option>
                    <option value="BP">Bình Phước</option>
                    <option value="BT">Bình Thuận</option>
                    <option value="CM">Cà Mau</option>
                    <option value="CT">Cần Thơ</option>
                    <option value="CB">Cao Bằng</option>
                    <option value="GL">Gia Lai</option>
                    <option value="HG">Hà Giang</option>
                    <option value="HN">Hà Nam</option>
                    <option value="HT">Hà Tĩnh</option>
                    <option value="HD">Hải Dương</option>
                    <option value="HP">Hải Phòng</option>
                    <option value="HG">Hậu Giang</option>
                    <option value="HB">Hoà Bình</option>
                    <option value="HY">Hưng Yên</option>
                    <option value="KH">Khánh Hoà</option>
                    <option value="KG">Kiên Giang</option>
                    <option value="KT">Kon Tum</option>
                    <option value="LC">Lai Châu</option>
                    <option value="LD">Lâm Đồng</option>
                    <option value="LS">Lạng Sơn</option>
                    <option value="LC">Lào Cai</option>
                    <option value="LA">Long An</option>
                    <option value="ND">Nam Định</option>
                    <option value="NA">Nghệ An</option>
                    <option value="NB">Ninh Bình</option>
                    <option value="NT">Ninh Thuận</option>
                    <option value="NN">Nước Ngoài</option>
                    <option value="PT">Phú Thọ</option>
                    <option value="PY">Phú Yên</option>
                    <option value="QB">Quảng Bình</option>
                    <option value="QN">Quảng Nam</option>
                    <option value="QN">Quảng Ngãi</option>
                    <option value="QN">Quảng Ninh</option>
                    <option value="QT">Quảng Trị</option>
                    <option value="ST">Sóc Trăng</option>
                    <option value="SL">Sơn La</option>
                    <option value="TN">Tây Ninh</option>
                    <option value="TB">Thái Bình</option>
                    <option value="TN">Thái Nguyên</option>
                    <option value="TH">Thanh Hoá</option>
                    <option value="TTH">Thừa Thiên Huế</option>
                    <option value="TG">Tiền Giang</option>
                    <option value="TQ">Toàn Quốc</option>
                    <option value="TV">Trà Vinh</option>
                    <option value="TQ">Tuyên Quang</option>
                    <option value="VL">Vĩnh long</option>
                    <option value="VP">Vĩnh Phúc</option>
                    <option value="YB">Yên Bái</option>
                    <option value="DN">Đà Nẵng</option>
                    <option value="DL">Đắk Lắk</option>
                    <option value="DN">Đắk Nông</option>
                    <option value="DB">Điện Biên</option>
                    <option value="DN">Đồng Nai</option>
                    <option value="DT">Đồng Tháp</option> */}
                  </select>
                </div>

                <div className="col-md-3 col-sm-6">
                  <select className="form-control">
                    <option>Category</option>
                    <option value="Journalist">Journalist</option>
                    <option value="realestate">Real estate</option>
                    <option value="it">Information technology</option>
                    <option value="sports">Sports</option>
                    <option value="bank">Bank</option>
                    <option value="spa">Spa</option>
                    <option value="guard-security">Guard - Security</option>
                    <option value="laborsafety">Labor safety</option>
                    <option value="sales-business">Sales - Business</option>
                    <option value="wholesale-retail">Wholesale - Retail</option>
                    <option value="lifeinsurance">Life insurance</option>
                    <option value="translators">Translators</option>
                    <option value="Post-telecommunication">Post - Telecommunication</option>
                    <option value="breed-veterinary">Breed - Veterinary</option>
                    <option value="stock">Stock</option>
                    <option value="biotechnology">Biotechnology</option>
                    <option value="nutrition">Nutrition</option>
                    <option value="mechanical">Mechanical</option>
                    <option value="oilandgas">Oil and gas</option>
                    <option value="textile">Textile</option>
                    <option value="tourism">Tourism</option>
                    <option value="pharmaceutical">pharmaceutical</option>
                    <option value="electronic">Electronic</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="entertaiment">Entertaiment</option>
                    <option value="education">Education</option>
                    <option value="nautical">Nautical</option>
                    <option value="aviation">Aviation</option>
                    <option value="accountant">Accountant</option>
                    <option value="architecture">Architecture</option>
                    <option value="law">Law</option>
                    <option value="restauranthotel">Restaurant Hotel</option>
                  </select>
                </div>

                <div className="col-md-3 col-sm-6">
                  <button type="submit" className="btn btn-primary" style={{ float: 'right' }}>
                    Search Job
                  </button>
                </div>

                <div class="col-md-9 col-sm-12">
                  <div class="job-types">
                    <label>
                      <input type="checkbox" class="full-time check-option checkbox" CHECKED />
                      &nbsp;Full Time
                    </label>

                    <label>
                      <input type="checkbox" class="part-time check-option checkbox" />
                      &nbsp;Part Time
                    </label>

                    <label>
                      <input type="checkbox" class="freelancer check-option checkbox" />
                      &nbsp;Freelancer
                    </label>

                    <label>
                      <input type="checkbox" class="internship check-option checkbox" />
                      &nbsp; Internship
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="item-click">
            {fetchCompanies.map((c) => (
              <article key={c._id}>
                <div class="brows-job-list">
                  <div class="col-md-1 col-sm-2 small-padding">
                    <div class="brows-job-company-img">
                      <a href="job-detail.html">
                        <img src={c.imgCom} class="img-responsive" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="col-md-5 col-sm-5">
                    <div class="brows-job-position">
                      <a href="job-detail.html">
                        <h3> {c.position}</h3>
                      </a>
                      <p>
                        {/* <span>{c.nameCom}</span> */}
                        <span class="brows-job-sallery">
                          <i class="fa fa-money"></i>${c.salary.from} -{c.salary.to}
                        </span>
                        <span class="job-type cl-success bg-trans-success">{c.workingTime}</span>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-3">
                    <div class="brows-job-location">
                      <p>
                        <i class="fa fa-map-marker"></i>
                        {c.location.street}
                      </p>
                      <p>
                        {c.location.district}, {c.location.city}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2 col-sm-2">
                    <div class="brows-job-link">
                      <a href="job-detail.html" class="btn btn-default">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
                <span class="tg-themetag tg-featuretag">{c.nameCom}</span>
              </article>
            ))}
          </div>

          <div>
            <div></div>
          </div>

          <div class="row">
            <ul class="pagination">
              <li>
                <a href="#">&laquo;</a>
              </li>
              <li class="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-ellipsis-h"></i>
                </a>
              </li>
              <li>
                <a href="#">&raquo;</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default JobList;
