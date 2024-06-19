import React from "react";
import { Link } from "react-router-dom";

const Taxnav = () => {
  return (
    <>
      <h2 className="text-center py-3">Individual Tax Return Clients</h2>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-12 mb-2">
            <button className="btn btn-secondary btn-block w-100" style={{ minWidth: "200px" }}>Add Clients</button>
          </div>
          <div className="col-md-4 col-sm-6 col-12 mb-2">
            <button className="btn btn-secondary btn-block w-100" style={{ minWidth: "200px" }}>Export in CSV</button>
          </div>
          <div className="col-md-4 col-sm-6 col-12 mb-2">
            <button className="btn btn-secondary btn-block w-100" style={{ minWidth: "200px" }}>Export in PDF</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Taxnav;
