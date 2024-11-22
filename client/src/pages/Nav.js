import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Pre from "./Pre";
import Profile from "./Profile";
import { ListGroupItem } from "react-bootstrap";
const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <Link className="nav-headings" to="/PrePre">
          PrePre
        </Link>
        <Link id="nav-heading" to="/Pre">
        <Pre></Pre>Pre
         </Link>
        <Link className="nav-headings" to="/Post">
          Post
        </Link>
        <Link className="nav-headings" to="/ChildCare">
          ChildCare
        </Link>
        {/* <Link className="nav-profile" to='/Profile'><Profile></Profile>Profile</Link> */}
  
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default Nav;
