import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { PiUsersFourFill } from "react-icons/pi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdOutlineContentCopy } from "react-icons/md";

export const Profile = () => {
  return (
    <div className="home lg:p-20 p-10 pt-10">
      <div>
        <div className="grid grid-cols-2">
          <div className="flex-start inline-flex">
            <BsFillPersonFill className="mt-1 opacity-50" />
            <span className="ml-2">Personal Details</span>
          </div>
          {/* <div className="text-right" style={{ float: "right" }}>
            <BsFillPersonFill className="mt-1" style={{ color: "GrayText" }} />
            <span className="ml-2">Personal Details</span>
          </div> */}
        </div>
        <div className="bg-grey h-0.5 mt-6"></div>
      </div>
      <div className="profile-box mt-14 lg:p-10 p-5">
        <div className="flex justify-between">
          <p className="text-primary ">Name</p>
          <p className="opacity-50 pl-10 text-right">Divine Oghenero Gift</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-primary ">Email</p>
          <p className="opacity-50 pl-10 text-right">dgift21@gmail.com</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-primary ">Phone Number</p>
          <p className="opacity-50 pl-10 text-right">+2341234567890</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-primary ">Referer</p>
          <p className="opacity-50 pl-10 text-right">-</p>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 mt-20">
          <div className="flex-start inline-flex">
            <PiUsersFourFill className="mt-1 opacity-50" />
            <span className="ml-2">Referral</span>
          </div>
          {/* <div className="text-right" style={{ float: "right" }}>
            <BsFillPersonFill className="mt-1" style={{ color: "GrayText" }} />
            <span className="ml-2">Personal Details</span>
          </div> */}
        </div>
        <div className="bg-grey h-0.5 mt-6"></div>
      </div>
      <div className="profile-box mt-14 p-10 lg:p-10 p-5">
        <div className="flex justify-between">
          <p className="text-primary ">Referer Code</p>
          <div className="inline-flex">
            <p className="opacity-50 pl-10 text-right">419f4128u305</p>
            <MdOutlineContentCopy
              text="419f4128u305"
              className="mt-1 ml-2 opacity-50"
            />
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-primary ">Referer Link</p>
          <div className="inline-flex">
            <p className="opacity-50 pl-10 text-right">Copy Link</p>
            <MdOutlineContentCopy
              text="https://medicalstore.com.ng/419f4128u305"
              className="mt-1 ml-2 opacity-50"
            />
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-primary ">Referer Earnings</p>
          <p className="opacity-50 pl-10 text-right">0</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-primary "> No of Referer</p>
          <p className="opacity-50 pl-10 text-right">0</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-primary ">Status</p>
          <p className="opacity-50 pl-10 text-right">Active</p>
        </div>
      </div>
    </div>
  );
};
