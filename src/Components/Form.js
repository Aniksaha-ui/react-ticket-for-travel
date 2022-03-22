import React from "react";

const Form = () => {
  return (
    <div className="mt-2">
      <form action="">
        <div>
          <input
            type="text"
            className="w-75 mx-auto form-control border border-2 form-border-color"
            placeholder="Email Address"
          />
        </div>
        <div className="mt-3">
          <input
            type="text"
            className="w-75 mx-auto form-control border border-2 form-border-color"
            placeholder="Password"
          />
        </div>
        <div>
          <p className="forgot-password">Forgot Password?</p>
        </div>
        <div className="mt-3 d-flex align-items-center justify-content-center">
          <button className="btn-width btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
