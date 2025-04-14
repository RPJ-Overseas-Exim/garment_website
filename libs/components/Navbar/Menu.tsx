"use client";
import Link from "next/link";
import { FaSearch, FaStore } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

export default function Menu({ userLoggedIn }: { userLoggedIn: boolean }) {
    // menu state i.e open or close
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // function to set the menu state to open
    function openMenu() {
        setIsMenuOpen(true);
    }

    // function to set the menu state to close
    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <>
            <div className={`menu__container ${isMenuOpen && "showMenu"}`}>
                {/* close button */}
                <div className="menu__close-button" onClick={closeMenu}>
                    <IoMdClose className="close-button" />
                </div>

                {/* Items elements  deprecated */}
                <ul className="nav__items" onClick={closeMenu}>
                    <li className="nav__item active">
                        <Link href={"/about"}>About</Link>
                    </li>
                    <li className="nav__item active">
                        <Link href={"/contact-us"}>Contact Us</Link>
                    </li>
                    {/*
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
                  */}
                </ul>

                {/* buttons elements */}
                <div className="nav__buttons" onClick={closeMenu}>
                    {/* Search icon */}
                    <Link href={"/shop"} className="nav__button">
                        <FaStore className="cursor-pointer w-[1.2em] h-[1.2em] text-skyblue-400" />
                    </Link>
                    <Link href={"#"} className="nav__button">
                        <FaSearch className="cursor-pointer w-[1.2em] h-[1.2em]" />
                    </Link>

                    {/* elements rendering based on the user is signed or not */}
                    {userLoggedIn ? (
                        <div>
                            <Link href={"/profile"} className="nav__button">
                                <RxAvatar className="nav__button-icon" />
                            </Link>
                            <Link href={"/shop/cart"} className="nav__button">
                                <FiShoppingCart className="nav__button-icon" />
                            </Link>
                        </div>
                    ) : (
                        <>
                            <Link href={"/signin"} className="login-button">
                                <button>Sign In</button>
                            </Link>
                            <Link href={"/signup"} className="signup-button">
                                <button>Sign Up</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* menu button(Hamburger icon button) */}
            <CiMenuFries className="nav__menu-button" onClick={openMenu} />
        </>
    );
}
