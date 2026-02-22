import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import MusicApp from "../../img/musicapp.png";


const ResponsiveGrid = () => {
  return (
    <div className="container">
      
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="card">
          <img src={MusicApp} alt="" />
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="card">
          <img src={Sidebar} alt="" />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="card">
          <img src={Ecommerce} alt="" />

            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveGrid;
