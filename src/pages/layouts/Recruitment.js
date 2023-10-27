import React, { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "../../middlewares/icons";

const Recruitment = () => {
  const [more, setMore] = useState(false);

  return (
    <div className="recruitment">
      <div className="component-one">
        <div className="head">
          <h2 className="title t-1">Candidates</h2>
          <p className="title t-3">
            Monitoring the hiring process of candidates.
          </p>
          <div className="filter">
            <button className="btn btn-active">All (25)</button>
            <button className="btn">Hired (25)</button>
            <button className="btn">Interview (25)</button>
            <button className="btn">Applied (25)</button>
          </div>
        </div>
        <div className="body">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>N*</th>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Company</th>
                  <th>Stage</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tbody-col-1">01</td>
                  <td className="tbody-col-2">
                    <img src={process.env.PUBLIC_URL + "/user.png"}  className="image"/>
                    <h2 className="title t-2">Stephen Nyaranga</h2>
                  </td>
                  <td className="tbody-col-3">stephen.nyaranga@aims-senegal.org</td>
                  <td className="tbody-col-4">Vatel Rwanda</td>
                  <td className="tbody-col-5">
                    <span className="status pending">Applied</span>
                  </td>
                  <td className="tbody-col-6">
                    <button
                      className="btn btn-more"
                      onClick={() => setMore(!more)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pagination display-flex justify-content-space-between align-items-center">
            <span>1-5 of 45</span>
            <div className="display-flex align-items-center">
              <div className="display-flex align-items-center">
                <span>Rows per page :</span>
                <select>
                  <option>5</option>
                  <option>10</option>
                </select>
              </div>
              <div className="display-flex align-items-center">
                <button className="button">
                  <MdOutlineArrowBackIos className="icon" />
                </button>
                <button className="button">
                  <MdOutlineArrowForwardIos className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {more && 
        <div className="component-two fade-in">
          <div className="head">
            <div className="user-head">
              <img src={process.env.PUBLIC_URL + "/user.png"}  className="image"/>
              <div>
                <h2 className="title t-2">Stephen Nyaranga</h2>
                <p className="title t-3">IT Manager & Software developer</p>
              </div>
            </div>
            <span className="close" onClick={() => setMore(!more)}>&times;</span>
          </div>
          <div className="options">
            <button className="btn btn-active">Information</button>
            <button className="btn">Files</button>
          </div>
        </div>
      }
    </div>
  );
};

export default Recruitment;
