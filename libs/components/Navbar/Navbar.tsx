"use client";
import "./Navbar.css";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav>
      <div className="container">
        {/* Logo element */}
        <h2 className="nav__logo">
          <Link href={"/"} className="nav__logo-link">
            RPJ GARMENTS
          </Link>
        </h2>

        {/* Items elements */}
        <ul className="nav__items">
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
        <div className="nav__search-bar">
          <FaSearch className="nav__search-bar__icon" />
          <input type="query" placeholder="Search" />
        </div>

        {/* buttons elements */}
        <div className="nav__buttons">
          {userLoggedIn ? (
            <>
              <Link href={"#"} className="nav__button">
                <RxAvatar className="nav__button-icon" />
              </Link>
              <Link href={"#"} className="nav__button">
                <FiShoppingCart className="nav__button-icon" />
              </Link>
            </>
          ) : (
            <>
              <Link href={"/login"} className="login-button">
                <button>Login</button>
              </Link>
              <Link href={"/login"} className="signup-button">
                <button>Sign Up</button>
              </Link>
            </>
          )}
        </div>

        {/* menu button(Hamburger icon button) */}
        <CiMenuFries className="nav__menu-button" onClick={openMenu} />

        {isMenuOpen && (
          <div className="menu__container" onClick={closeMenu}>
            {/* menu options */}
            <ul className="nav__items block">
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
            <div className="nav__search-bar block">
              <FaSearch className="nav__search-bar__icon" />
              <input type="query" placeholder="Search" />
            </div>

            <div className="nav__buttons block">
              {userLoggedIn ? (
                <>
                  <Link href={"#"} className="nav__button">
                    <RxAvatar className="nav__button-icon" />
                  </Link>
                  <Link href={"#"} className="nav__button">
                    <FiShoppingCart className="nav__button-icon" />
                  </Link>
                </>
              ) : (
                <>
                  <Link href={"/login"} className="login-button">
                    <button>Login</button>
                  </Link>
                  <Link href={"/login"} className="signup-button">
                    <button>Sign Up</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
