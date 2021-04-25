import React, { useState, useEffect } from 'react';

import categoryApi from '../../api/categoryAPI';

const Category = () => {
  const [fetchCategories, setFetchCategories] = useState([]);
  const [visible, setVisible] = useState([8]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categorylist = await categoryApi.getAllCategory();
      // console.log(categorylist);
      setFetchCategories(categorylist);
    };
    fetchCategories();
  }, [categoryApi]);

  var categories = fetchCategories.slice(0, visible).map((listcategories) => {
    return (
      <div key={listcategories._id}>
        <div className="col-md-3 col-sm-6 category-cus" style={{ float: 'left' }}>
          <div className="category-box" data-aos="fade-up">
            <div className="category-desc">
              <div className="category-icon">
                <img src={listcategories.career.icon} alt="" width="17%" />
              </div>
              <div className="category-detail category-desc-text">
                <h4>
                  <a href={'# '}>{listcategories.career.careerName}</a>
                </h4>
                <p>122 Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const handleLoadMore = () => {
    setVisible(visible + 4);
  };

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
              <div>{categories}</div>
              <div>
                {visible < fetchCategories.length && (
                  <a className="btn btn-primary" onClick={handleLoadMore}>
                    Load More
                  </a>
                )}
              </div>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
