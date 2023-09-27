import { TextField, Button } from "@mui/material";
import React from "react";
import Item from "../Assets/item.svg";
import { MdOutlineDeleteOutline } from "react-icons/md";

export const Cart = () => {
  return (
    <div className="home">
      <div className="col-span-2 lg:p-20 p-10  pr-10 pt-10">
        <div className="flex justify-between">
          <p>Shopping</p>
          <p>3 Items</p>
        </div>
        <div className="bg-grey h-0.5 mt-6"></div>
        <div className="grid cart-head grid-cols-9 gap-5 pt-10 opacity-50">
          <p className="uppercase col-span-3 m-auto">product Details</p>
          <p className="uppercase col-span-2 m-auto">Quantity</p>
          <p className="uppercase col-span-2 m-auto">price</p>
          <p className="uppercase col-span-2 m-auto">total</p>
        </div>
        <div className="grid grid-cols-9 pt-10 ">
          <div className=" col-span-3 pr-10  ">
            <div className="lg:flex">
              <div className="">
                <img src={Item} className="m-auto mb-3" />
              </div>
              <div className="ml-5">
                <p>Benylin syrup</p>
                <p className="text-primary">Medication</p>
                <div className="inline-flex">
                  <MdOutlineDeleteOutline className="mt-1" />
                  <span>
                    <p>Remove</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex m-auto col-span-2">
            <button>-</button>
            <input
              type="text"
              value="2"
              class="bordered-input text-center m-auto"
            />
            <button>+</button>
          </div>
          <p className="uppercase col-span-2 m-auto">$100</p>
          <p className="uppercase col-span-2 m-auto">$200</p>
        </div>
      </div>
      <div className="col-span-1 cart lg:p-20 lg:pl-10 p-10 lg:pb-40 pt-10">
        <p>Order Summary</p>
        <div className="bg-black opacity-10 h-0.5 mt-6"></div>
        <div className="flex justify-between mt-10">
          <p className="uppercase opacity-50"> items 5</p>
          <p>$1500</p>
        </div>
        <TextField
          fullWidth
          id="outlined-basic"
          label="SHIPPING ADDRESS"
          variant="outlined"
          sx={{ mb: 2, mt: 5 }}
          type="text"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="EMAIL ADDRESS"
          variant="outlined"
          sx={{ mb: 2, mt: 3 }}
          type="text"
        />
        <button className="justify-center mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg bg-secondary w-40   py-4 text-base text-white shadow-sm">
          Apply
        </button>
        <div className="bg-black opacity-10 h-0.5 mt-24"></div>
        <div className="flex justify-between mt-10">
          <p className="uppercase"> TOTAL COST</p>
          <p>$1500</p>
        </div>
        <button className="justify-center mt-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg bg-primary w-full inline-flex py-4 text-base text-white shadow-sm">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};
