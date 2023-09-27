import React from "react";
import { TextField, Button } from "@mui/material";
import Create from "../Assets/create.svg";
import Logo from "../Assets/smLogo.svg";
import { NavLink } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2">
      <div className="lg:block md:block hidden">
        <img src={Create} alt="login-banner" />
      </div>
      <div className="pt-20">
        <img src={Logo} alt="login-banner" className="m-auto" />
        <p className="form-head">Create Account</p>
        <p className="form-sub mt-5 text-center">
          Let’s get you started with healthy shopping
        </p>
        <div className="pt-14 lg:p-40 md:p-20 p-10 pb-0">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            sx={{ mb: 2 }}
            type="emial"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            type="number"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            type="text"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            type="password"
          />
          <div className="m-10 mb-3">
            <button className="justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg bg-primary w-full py-4 text-base text-white shadow-sm">
              Sign Up
            </button>
          </div>
          <p className="redirect text-center">
            Already have an account ?
            <span className="text-primary ml-1">
              <NavLink to="/">log in here</NavLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
