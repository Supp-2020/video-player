import React from "react";
import "./header.css";
import { FaBell } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { GrMail } from "react-icons/gr";
import Category from "./Category/Category";

const Header = () => {
  return (
    <section className="nav-main-Container" data-testid="nav-header-wrapper">
      <div className="header-container">
        <div className="header-logo">Video Player</div>
        <div className="header-search">
          <form action="">
            <input placeholder="Search" className="search-input" />
          </form>
        </div>
        <div className="header-profile">
          <GrMail className="icon hover" />
          <FcLike className="icon hover" />
          <FaBell className="icon hover" />
          <BsPersonCircle className=" icon hover" />
        </div>
      </div>
      <hr className="horizontal-line" />
      <Category />
    </section>
  );
};

export default Header;
