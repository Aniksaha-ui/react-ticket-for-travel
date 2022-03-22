import React from "react";
import Card from "../Components/Card";

import mobile from "../images/mobile.png";

const Register = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex g-0">
        {/* img section  */}
        <div className="col-lg-8 col-sm-11 p-5 bg-2F2E41">
          <img className="img-margin mt-2" src={mobile} height="550" alt="" />
        </div>
        {/* img section end  */}

        <div className="col-lg-4 col-sm-1 bg-E5E5E5">
          <div className="relative box-shadow">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
