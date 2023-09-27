import React from "react";
import { TextField, Button } from "@mui/material";
import Image from "../Assets/forgot.svg";
import Logo from "../Assets/smLogo.svg";
import { NavLink } from "react-router-dom";

export const Confirm = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2">
      <div className="lg:block md:block hidden">
        <img src={Image} alt="login-banner" />
      </div>
      <div className="pt-20">
        <img src={Logo} alt="login-banner" className="m-auto" />
        <p className="form-head">Success!</p>
        <p className="form-sub mt-5 lg:px-48 md:px-20 text-center">
          A password rest have been sent to your email. Please clink on the link
          in your mail and create a new password to Log in.
        </p>
        <div className="pt-14 lg:p-40 md:p-20 p-10 pb-0">
          <div className="m-10 mb-3">
            <NavLink to="/">
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
