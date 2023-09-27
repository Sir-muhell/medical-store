import { useState } from "react";
import { GoHome } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdOutlinePersonOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/logo.svg";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-box">
        <img className="mt-10" src={Logo} alt="logo" />
      </div>
      <div className="bg-white h-1 mt-8"></div>
      <div>
        <ul className="text-white">
          <NavLink to="/home">
            <li className="link mt-14 inline-flex">
              <GoHome className="nav-icon" style={{ fontSize: "30px" }} />
              <span className="ml-5">Home</span>
            </li>
          </NavLink>
          <NavLink to="/cart">
            <li className="link mt-10 inline-flex">
              <HiOutlineShoppingCart
                className="nav-icon"
                style={{ fontSize: "25px" }}
              />
              <span className="ml-5">My Cart</span>
            </li>
          </NavLink>
          <NavLink to="/profile">
            <li className="link mt-10">
              <MdOutlinePersonOutline
                className="nav-icon"
                style={{ fontSize: "30px" }}
              />
              <span className="ml-5">Profile</span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
