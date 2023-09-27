import React, { useState } from "react";
import Item from "../Assets/item.svg";
import Rating from "@mui/material/Rating";

export const Card = () => {
  const [value, setValue] = React.useState(2);
  return (
    <div className="item-card m-auto">
      <div className="item-img-card bg-grey">
        <img src={Item} />
      </div>
      <div className="m-auto bg-white p-5">
        <p className="card-text ">Cough Syrup</p>
        <Rating
          sx={{ mt: 1 }}
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <p className=" text-center">NGN 8,000</p>
        <button className=" item-center transition bg-primary ease-in-out mt-4 delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg  px-4 py-4 text-base   text-white shadow-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
