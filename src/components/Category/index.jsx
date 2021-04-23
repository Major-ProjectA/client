import React, { useState, useEffect } from 'react';

// import { useSelector } from 'react-redux';

import categoryApi from '../../api/categoryAPI';

const Category = () => {
  const [fetchCategories, setFetchCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const params = {
        _limit: 8,
      };
      const categorylist = await categoryApi.getAllCategory(params);
      console.log(categorylist);
      setFetchCategories(categorylist);
    };
    fetchCategories();
  }, [categoryApi]);

  // const jobs = useSelector((state) => state.jobs);
  // console.log(jobs);

  return !fetchCategories.length ? (
    <div className="main-heading">
      <h2>Category</h2>
      <h4>Don't have data !</h4>
      <br />
    </div>
  ) : (
    <section>
      <div className="container">
        <div className="row">
          <div className="main-heading">
            <h2>
              Browse Jobs By <span>Category</span>
            </h2>
          </div>
        </div>
        {fetchCategories.map((category) => (
          <div key={category._id}>
            <div className="col-md-3 col-sm-6 category-cus" style={{ float: 'left' }}>
              <div className="category-box" data-aos="fade-up">
                <div className="category-desc">
                  <div className="category-icon">
                    {/* <i className="icon-bargraph" aria-hidden="true"></i>
                    <i
                      className="icon-bargraph abs-icon"
                      aria-hidden="true"
                    ></i> */}
                    <img src={category.career.icon} alt="" width="17%" />
                  </div>
                  <div className="category-detail category-desc-text">
                    <h4>
                      <a href={'# '}>{category.career.careerName}</a>
                    </h4>

                    <p>122 Jobs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
