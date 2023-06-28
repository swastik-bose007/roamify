// ------------------------------------------------------
// Dependencies
// ------------------------------------------------------
import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { Drawer } from "flowbite";
// ------------------------------------------------------
// SVG Components
// ------------------------------------------------------
import LogoSvg from "../constants/LogoSvg";
// ------------------------------------------------------
// Stylesheets
// ------------------------------------------------------
import "../../AppStyles/navbarStyle.css";

function navbar() {
  return (
    <>
      <Navbar fluid rounded className="bg-light">
        <Navbar.Brand href="https://flowbite-react.com">
          <LogoSvg className="mr-3 logo-size" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                swastikbose98@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/map-page">Map</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default navbar;
