import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesABI.categories;

  const [category, setCategory] = state.jobAPI.category;
  const [location, setLocation] = state.jobAPI.location;
  const [search, setSearch] = state.jobAPI.search;

  const handleCategory = (e) => {
    // setCategory(e.target.value);
    // setSearch('');
  };

  return (
    <>
      <div class="row extra-mrg">
        <div class="wrap-search-filter">
          <form>
            <div className="col-md-3 col-sm-6">
              <input
                type="text"
                className="form-control"
                placeholder="What Is Your Favorite Job ?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="col-md-3 col-sm-6">
              <select className="form-control" value={location} name={location}>
                <option value="">All City</option>
                {/* {jobs.map((job) => (
                  <option value={'Ho Chi Minh' + job._id} key={job._id}>
                    {job.nameCom}
                  </option>
                ))} */}
              </select>
            </div>

            <div className="col-md-3 col-sm-6">
              <select className="form-control" name={category} value={category} onChange={handleCategory}>
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option value={'category=' + category._id} key={category._id}>
                    {category.career.careerName}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-3 col-sm-6">
              {/* <label>&nbsp;City:</label> */}
              <select id="choose-filter" className="form-control">
                <option value="HCM">Ascending</option>
                <option value="HN">Descending</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Filters;
