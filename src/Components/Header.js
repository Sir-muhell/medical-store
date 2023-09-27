import React, { useState, useContext } from "react";
import { SlWallet } from "react-icons/sl";
import Logo from "../Assets/whiteLogo.png";
import { FaBars, FaPowerOff, FaTimes } from "react-icons/fa";
import { BsTriangleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdOutlinePersonOutline } from "react-icons/md";
import WalletState from "../utils/State";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [colorChange, setColorchange] = useState(false);
  const [navLogo, setNavLogoChange] = useState(false);
  const [navMenuUp, setNavMenuUp] = useState(true);
  const {
    addCustomNetwork,
    DisconnectWallet,
    GetAccount,
    connectWallet,
    wallet
  } = useContext(WalletState);

  return (
    <>
      <div className="navbar lg:bg-white bg-primary grid lg:grid-cols-3 grid-cols-5 justify-center  p-10 lg:gap-20 gap-5  ">
        <div className="col-span-2 item-center lg:block hidden ">
          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray sr-only "
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-20 text-sm border border-primary rounded-lg bg-white  "
                placeholder="Search Cart"
                required
              />
              <button
                type="submit"
                className="item-center text-white absolute right-4 bottom-1 bg-primary  focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-5 py-3.5 "
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <img
          src={Logo}
          className="lg:hidden m-auto block col-span-1 w-14 rounded-full"
        />
        <div className="col-span-3 lg:col-span-1 m-auto">
          <button className="inline-flex item-center transition lg:bg-primary bg-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg px-4  lg:px-10 py-3 text-base text-primary  lg:text-white shadow-sm">
            <SlWallet className="text-center text-secondary" />
            <span
              className="ml-3"
              onClick={() => {
                wallet?.walletAddress ? DisconnectWallet() : connectWallet();
              }}
            >
              {" "}
              {wallet?.walletAddress?.length > 2
                ? `${wallet.walletAddress.substr(
                    0,
                    8
                  )}...${wallet.walletAddress.substr(-8, 8)}`
                : "connect wallet"}
            </span>
          </button>
        </div>
        <div className="col-span-1 lg:hidden block m-auto">
          <div className={navMenuUp ? " navMenuUp" : "menu-icon"}>
            <div className="text-white icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
          </div>

          <ul
            className={
              click ? "nav-menu active bg-white shadow-lg" : "nav-menu hidden"
            }
          >
            <div className="triangle text-white lg:hidden md:hidden">
              <BsTriangleFill />
            </div>
            <NavLink to="/home">
              <li className="link mt-5 inline-flex">
                <GoHome className="nav-icon" style={{ fontSize: "30px" }} />
                <span className="ml-5">Home</span>
              </li>
            </NavLink>
            <NavLink to="/cart">
              <li className="link mt-5 inline-flex">
                <HiOutlineShoppingCart
                  className="nav-icon"
                  style={{ fontSize: "25px" }}
                />
                <span className="ml-5">My Cart</span>
              </li>
            </NavLink>
            <NavLink to="/profile">
              <li className="link mt-5">
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
      <div className="line"></div>
    </>
  );
};
