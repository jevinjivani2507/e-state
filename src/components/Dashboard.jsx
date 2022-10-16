import React from "react";
import Card from "./ItemCard";
import Topbar from "./Topbar";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen px-40 pt-10">
      <Topbar />
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
