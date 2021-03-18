import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { BsFillArchiveFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./navbarcmp.css";
function NavbarCmp() {
  return (
    <div>
      <Navbar className="border border-success">
        <Navbar.Brand className="link">
          <BsFillArchiveFill className="mr-2 text-success" />
          <NavLink className=" text-success" to="/">
            Welcome to my portfolio
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <NavLink to="/">Jahanzaib</NavLink>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarCmp;
