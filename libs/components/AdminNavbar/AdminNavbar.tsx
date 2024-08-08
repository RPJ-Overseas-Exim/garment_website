"use client";
import Image from "next/image";
import Link from "next/link";
import "./AdminNavbar.css";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useState } from "react";
import Logout from "@/app/(user)/profile/Logout";

import { IoSettingsOutline } from "react-icons/io5";

export default function AdminNavbar() {
  // state to maintain menu open
  const [notificationMenu, setNotificationMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // function to set the notification and menu to true
  const openNotification = () => {
    setNotificationMenu(!notificationMenu);
    setMenuOpen(false);
  };

  const openMenu = () => {
    setMenuOpen(!menuOpen);
    setNotificationMenu(false);
  };

  // function to set the notification and menu to false
  const closeNotification = () => {
    setNotificationMenu(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="admin-navbar">
      <nav className="admin-navbar__nav">
        {/* Dashboard logo or name */}
        <h1>Dashboard</h1>

        <div className="admin-navbar-options">
          {/* notification section */}
          <div className="dropdown">
            {/* notifications icon */}
            <button className="dropdown-button" onClick={openNotification}>
              <IoNotificationsOutline className="bell-icon" />
            </button>

            {/* notification menu section */}
            <div
              className={`dropdown-menu ${notificationMenu && "show-menu"}`}
              onClick={closeNotification}
            >
              <span>
                <Link href={"/"}>Message</Link>
              </span>
              <span>
                <Link href={"/"}>Message</Link>
              </span>
              <span>
                <Link href={"/"}>Message</Link>
              </span>
              <span>
                <Link href={"/"}>Message</Link>
              </span>
            </div>
          </div>

          {/* Profile image */}
          <Image
            className="admin-navbar-options__image"
            src={"/assets/images/admin navbar/profile.png"}
            alt={"Profile Image"}
            width={30}
            height={30}
            sizes="100%"
          />

          {/* Menu section */}
          <div className="dropdown">
            {/* menu dropdown arrow */}
            <button className="dropdown-button" onClick={openMenu}>
              <IoIosArrowDropdownCircle className="arrow-icon" />
            </button>

            {/* menu */}
            <div
              className={`dropdown-menu ${menuOpen && "show-menu"}`}
              onClick={closeMenu}
            >
              <span>Username</span>
              <hr />
              <span>
                <IoSettingsOutline />
                Settings
              </span>
              <span>
                <Logout />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
