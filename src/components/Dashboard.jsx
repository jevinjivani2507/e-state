import React from "react";
import Card from "./ItemCard";
import Topbar from "./Topbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen px-40 py-10">
      <Topbar />
      <div className="my-10 grid grid-cols-3 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
