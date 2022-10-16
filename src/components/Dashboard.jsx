import React from "react";
import Card from "./ItemCard";
import Topbar from "./Topbar";
import Footer from "./Footer";

import items from "../Resources/items.json";

const Dashboard = () => {
  // const
  console.log(items);
  // console.log(iht);
  return (
    <div className="min-h-screen px-40 pt-10">
      <Topbar />
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            location={item.location}
            price={item.price}
            bed={item.bed}
            bath={item.bath}
            area={item.area}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
