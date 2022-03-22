import React from "react";
import Form from "../Components/Form";
import facebook from "../images/facebook.png";
import google from "../images/google.png";
import logo from "../images/logo.png";
const Card = () => {
  return (
    <div>
      <div className="absolute">
        <div className="p-3 mt-3">
          <div className="d-flex align-item-center justify-content-center">
            <img src={logo} alt="" />
          </div>
          <p className="text-center heading-font">
            Explore The Best Tours... Hurry up!!
          </p>
          <Form />
          <p className="hr-lines mt-3">or</p>

          <div className="d-flex align-items-center justify-content-center mt-3">
            <img src={facebook} height="53.46" width="55" alt="" />
            <img
              className="ms-5"
              src={google}
              height="53.46"
              width="55"
              alt=""
            />
          </div>
          <div className="d-flex align-item-center justify-content-center mt-4">
            <p className="account">
              Don't have an account <span className="Signup">Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
