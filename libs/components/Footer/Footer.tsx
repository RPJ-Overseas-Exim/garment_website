import "./Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h2 className="footer__title">Myus Enterprises</h2>

                <hr className="divider" />

                <div className="footer__nav">
                    <div>
                        <h4 id="Terms-and-Policy">Terms and Policy</h4>
                        <ul aria-labelledby="Terms-and-Policy">
                            <li>
                                <Link href={"/returns"}>Return & Refund</Link>
                            </li>
                            <li>
                                <Link href={"/shipping-policy"}>Shipping Policy</Link>
                            </li>
                            <li>
                                <Link href={"/terms-and-condition"}>Terms and Conditions</Link>
                            </li>
                            <li>
                                <Link href={"/privacy-policy"}>Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 id="Location">Location</h4>
                        <ul aria-labelledby="Location">
                            <li>Mumbai-400001, Maharashtra</li>
                        </ul>
                    </div>

                    <div>
                        <h4 id="Contact">Contact</h4>
                        <ul aria-labelledby="Contact" className="footer__contact">
                            <li>
                                <Link href="/">
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <FaEnvelope />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="divider" />

                <span className="footer__bottom">
                    Copyright &copy; Myus Enterprises. All rights reserved.
                </span>
            </div>
        </footer>
    );
}
