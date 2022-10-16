import React from "react";
import { FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex bg-white -mx-40 min-h-[20rem] px-80 py-5">
      <div className="w-2/12 text-primary flex text-2xl gap-2">
        <div className=" align-top flex gap-2 select-none">
          <FaHome className="mt-1" /> <span className="flex"> e-state </span>
        </div>
      </div>
      <div className="flex justify-between w-10/12">
        <div>
          <h4 className="uppercase font-bold">Sell a Home</h4>
          <h6>Request an offer</h6>
          <h6>Pricing</h6>
          <h6>Reviews</h6>
          <h6>Stories</h6>
          <h4 className="uppercase font-bold">Buy a Home</h4>
          <h6>Buy</h6>
          <h6>Finance</h6>
        </div>
        <div>
          <h4 className="uppercase font-bold">Buy, Rent and Sell</h4>
          <h6>Buy and sell properties</h6>
          <h6>Rent home</h6>
          <h6>Builder trade-up</h6>
          <h4 className="uppercase font-bold">Terms & Privacy</h4>
          <h6>Trust & Safety</h6>
          <h6>Terms of Services</h6>
        </div>
        <div>
          <h4 className="uppercase font-bold">About</h4>
          <h6>Company </h6>
          <h6>How it works</h6>
          <h6>Contact</h6>
          <h6>Investors</h6>
          <h4 className="uppercase font-bold">Resources</h4>
          <h6>Blog</h6>
          <h6>Guides</h6>
          <h6>FAQ</h6>
          <h6>Help Center</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
