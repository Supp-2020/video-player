import React, { useState } from "react";
import "./header.css";
import { FaBell } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

const Header = () => {

  return (
    <section className="nav-main-Container" data-testid="nav-header-wrapper">
      <div className="header-container">
        <div className="header-logo">Web Video Player</div>
        <div className="header-search">
          <form action="">
            <input placeholder="Search" className="search-input" />
          </form>
        </div>
        <div className="header-profile">
          <FcLike className="icon like-icon" />
          <FaBell className="icon notification-icon" />
          <BsPersonCircle className=" icon profile-icon" />
        </div>
      </div>
    </section>
  );
};

export default Header;
