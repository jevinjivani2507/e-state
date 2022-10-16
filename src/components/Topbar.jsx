import React, {useState} from "react";
import { Textarea, Checkbox, Button, Dropdown } from "@nextui-org/react";

const Topbar = () => {

  const [location, setLocation] = useState("New York, USA");
  const [when, setWhen] = useState("Select Move-in Date");
  const [price, setPrice] = useState("$500 - $2500");
  const [propertyType, setPropertyType] = useState("Houses");



  return (
    <div>
      <div className="flex justify-between">
        <h2 className="">Search properties to rent</h2>
        <div className="flex justify-center items-center">
          <h3>Search Box</h3>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5 w-full bg-white h-[5rem] my-5 px-10 rounded-lg">
        <div className="space-y-[-0.5rem]">
          <h6>Location</h6>
          <Dropdown DropdownVariants="shadow" >
            <Dropdown.Button className="!p-0" auto light>
              <h6 className="m-0">{location}</h6>
            </Dropdown.Button>
            <Dropdown.Menu
              variant="light"
              aria-label="Actions"
              onChange={(e) => console.log(e)}
            >
              <Dropdown.Item key="new">Click</Dropdown.Item>
              <Dropdown.Item key="copy">Copy link</Dropdown.Item>
              <Dropdown.Item key="edit">Edit file</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="space-y-[-0.5rem]">
          <h6>When</h6>
          <Dropdown>
            <Dropdown.Button className="!p-0" auto light>
              <h6 className="m-0">{when}</h6>
            </Dropdown.Button>
            <Dropdown.Menu
              variant="light"
              aria-label="Actions"
            >
              <Dropdown.Item key="new">New file</Dropdown.Item>
              <Dropdown.Item key="copy">Copy link</Dropdown.Item>
              <Dropdown.Item key="edit">Edit file</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="space-y-[-0.5rem]">
          <h6>Price</h6>
          <Dropdown>
            <Dropdown.Button className="!p-0" auto light>
              <h6 className="m-0">{price}</h6>
            </Dropdown.Button>
            <Dropdown.Menu
              variant="light"
              aria-label="Actions"
            >
              <Dropdown.Item key="new">New file</Dropdown.Item>
              <Dropdown.Item key="copy">Copy link</Dropdown.Item>
              <Dropdown.Item key="edit">Edit file</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="space-y-[-0.5rem]">
          <h6>Property Type</h6>
          <Dropdown>
            <Dropdown.Button className="!p-0" auto light>
              <h6 className="m-0">{propertyType}</h6>
            </Dropdown.Button>
            <Dropdown.Menu
              variant="light"
              aria-label="Actions"
            >
              <Dropdown.Item key="new">New file</Dropdown.Item>
              <Dropdown.Item key="copy">Copy link</Dropdown.Item>
              <Dropdown.Item key="edit">Edit file</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
