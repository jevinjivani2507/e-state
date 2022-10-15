import React from "react";
import { Card } from "@nextui-org/react";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import { FaBath, FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";

const ItemCard = () => {
  return (
    <div className="min-h-[10rem]">
      <Card>
        <div>
          <img src={image1} />
        </div>
        <div className="p-5 space-y-[-.25rem]">
          <h4 className="text-primary">
            $2,095 <span className="text-sm text-gray">/ month</span>
          </h4>
          <h3>Palm Harbor</h3>
          <p className="text-sm text-gray">
            2699 Green Vally, Highland Lake,FL
          </p>
          <br />
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FaBed className="card-bottom" /> 3 Beds
            </div>
            <div className="flex items-center gap-2">
              <FaBath className="card-bottom" /> 2 Baths
            </div>
            <div className="flex items-center gap-2">
              <BiArea className="card-bottom" /> 1,500 sqft
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ItemCard;
