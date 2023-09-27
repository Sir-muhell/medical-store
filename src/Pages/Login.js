import React from "react";
import { TextField, Button } from "@mui/material";
import Log from "../Assets/login.svg";
import Logo from "../Assets/smLogo.svg";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2">
      <div className="lg:block md:block hidden">
        <img src={Log} alt="login-banner" />
      </div>
      <div className="pt-20 sm-card">
        <img src={Logo} alt="login-banner" className="m-auto" />
        <p className="form-head">Welcome back</p>
        <p className="form-sub mt-5 text-center">
          We look forward to a healthy living
        </p>
        <div className="pt-14 lg:p-40 md:p-20 p-10 pb-0 ">
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
            label="Password"
            variant="outlined"
            type="password"
            sx={{ mb: 2 }}
          />

          <div className="m-10 mb-3">
            <NavLink to="/home">
              <button className="justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg bg-primary w-full py-4 text-base text-white shadow-sm">
                Login
              </button>
            </NavLink>
          </div>
          <p className="redirect text-center text-primary">
            <NavLink to="/forgot">Forgot Password</NavLink>
          </p>
          <p className="redirect text-center mt-2">
            Already have an account ?
            <span className="text-primary ml-1">
              <NavLink to="/signup">Sign up here</NavLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
