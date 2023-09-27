import React from "react";
import { TextField, Button } from "@mui/material";
import Image from "../Assets/forgot.svg";
import Logo from "../Assets/smLogo.svg";
import { NavLink } from "react-router-dom";

export const Forgot = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2">
      <div className="lg:block md:block hidden">
        <img src={Image} alt="login-banner" />
      </div>
      <div className="pt-20">
        <img src={Logo} alt="login-banner" className="m-auto" />
        <p className="form-head">Password Retrieval</p>
        <p className="form-sub mt-5 text-center">
          Let’s connect you back to a healthy lifestyle
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

          <div className="m-10 mb-3">
            <NavLink to="/confirm">
              <button className="justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg bg-primary w-full py-4 text-base text-white shadow-sm">
                Submit
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
