import React from 'react'
import { useHistory } from "react-router-dom";


import pic1 from "./img/1.png";
import pic2 from "./img/2.png";



const Home = () => {
  const history = useHistory();

  const aa = () => {
    history.push("/Employee/");
  };

  const bb = () => {
    history.push("/Employee-report/");
  };

  return (
  
      <div className="container-fluid">
      <div className="row">
          <div className="col-12">
            <div
              className="jumbotron jumbotron-fluid mt-4 p-4"
              style={{ backgroundColor: "#71baeb" }}
            >
              <div className="container">
                <h1 className="display-4" style={{color: "#F7AB07", fontFamily: "consolas", fontWeight:"bold",display: 'flex',  justifyContent:'center', alignItems:'center'}}>Employee</h1>
              </div>
            </div>
          </div>
        </div>
        <br/>

      <br/>


        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <fieldset className="form-group">
              <div className="row mt-4 mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                  <div
                    className="card text-center card-finance"
                    style={{ width: "20rem" }}
                    onClick={aa}
                  >
                    <img
                      src={pic1}
                      alt="Return and Refund Request"
                      className="card-img-top rounded mx-auto d-block"
                      style={{ width: "35vh", height: "32vh" }}
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn_financial w-100 fw-bold"
                      >
                       Employee
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                  <div
                    className="card text-center card-finance"
                    style={{ width: "20rem" }}
                    onClick={bb}
                  >
                    <img
                      src={pic2}
                      alt="Return and Refund Management"
                      className="card-img-top rounded mx-auto d-block"
                      style={{ width: "36vh", height: "32vh" }}
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn_financial w-100 fw-bold"
                      >
                       Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
   
  );
}

export default Home;