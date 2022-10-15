import React from "react";
import { Textarea, Checkbox, Button } from "@nextui-org/react";

const Topbar = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-bold">Search properties to rent</h2>
        <div className="flex justify-center items-center">
          <h3>Search Box</h3>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 w-full bg-white h-[5rem] my-5 px-10 rounded-lg">
        <div className="space-y-[-0.5rem]">
          <h6>Location</h6>
          <h5>New York, USA</h5>
        </div>
        <div className="space-y-[-0.5rem]">
          <h6>When</h6>
          <h5>Select Move-in Date</h5>
        </div>
        <div className="space-y-[-0.5rem]">
          <h6>Price</h6>
          <h5>$500-$2,500</h5>
        </div>
        <div className="space-y-[-0.5rem]">
          <h6>Property Type</h6>
          <h5>House</h5>
        </div>
        <div className="space-y-[-0.5rem]">
          <Button className="!bg-primary" auto>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
