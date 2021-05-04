import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';

function Filters() {
  const state = useContext(GlobalState);
  const [jobs] = state.jobAPI.jobs;
  const [location, setLocation] = state.jobAPI.location;

  const [search, setSearch] = state.jobAPI.search;

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
                {/* <option value="HCM">Ho Chi Minh</option>
                <option value="HN">Ha Noi</option> */}
                {/* {jobs.map((cities) => {
                  <div value={'cities=' + cities._id} key={cities._id}>
                    {cities.siteCom}
                  </div>;
                })} */}
              </select>
            </div>

            <div className="col-md-3 col-sm-6">
              <select className="form-control">
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
