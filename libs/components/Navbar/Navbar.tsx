"use client";
import "./Navbar.css";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Navbar() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav className="primary-nav">
      <div className="container">
        {/* Logo element */}
        <h2 className="nav__logo">
          <Link href={"/"} className="nav__logo-link">
            RPJ GARMENTS
          </Link>
        </h2>

        <div className={`menu__container ${isMenuOpen && "showMenu"}`}>
          {/* close button */}
          <div className="menu__close-button" onClick={closeMenu}>
            <IoMdClose className="close-button" />
          </div>

          {/* Items elements */}
          <ul className="nav__items" onClick={closeMenu}>
            <li className="nav__item active">
              <Link href={"/"}>Shop</Link>
            </li>
            <li className="nav__item">
              <Link href={"#"}>Men</Link>
            </li>
            <li className="nav__item">
              <Link href={"#"}>Women</Link>
            </li>
            <li className="nav__item hidden lg:block">
              <Link href={"#"}>Combos</Link>
            </li>
            <li className="nav__item hidden lg:block">
              <Link href={"#"}>Joggers</Link>
            </li>
          </ul>

          {/* search bar element */}
          {/* <div className="nav__search-bar">
            <FaSearch className="nav__search-bar__icon" />
            <input type="query" placeholder="Search" />
          </div> */}

          {/* buttons elements */}
          <div className="nav__buttons" onClick={closeMenu}>
            {/* Search icon */}
            <Link href={"#"} className="nav__button">
              <FaSearch className="cursor-pointer w-[1.2em] h-[1.2em]" />
            </Link>

            {userLoggedIn ? (
              <div>
                <Link href={"#"} className="nav__button">
                  <RxAvatar className="nav__button-icon" />
                </Link>
                <Link href={"#"} className="nav__button">
                  <FiShoppingCart className="nav__button-icon" />
                </Link>
              </div>
            ) : (
              <>
                <Link href={"/login"} className="login-button">
                  <button>Sign In</button>
                </Link>
                <Link href={"/login"} className="signup-button">
                  <button>Sign Up</button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* menu button(Hamburger icon button) */}
        <CiMenuFries className="nav__menu-button" onClick={openMenu} />
      </div>
    </nav>
  );
}
