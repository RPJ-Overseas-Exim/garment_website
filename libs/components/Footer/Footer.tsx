import "./Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h2 className="footer__title">Myus Enterprise</h2>

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

                    <div className="md:max-w-[33%]">
                        <h4 id="Location">Location</h4>
                        <ul aria-labelledby="Location">
                            <li>{`Third Floor, Flat No-304 Bldg No-37, CTS 6A Part Mhada SN 263, 64T S SRD Project Liink Road, Kandivali West, Mumbai Suburban, Maharashtra, 400067`}</li>
                        </ul>
                    </div>

                    <div>
                        <h4 id="Contact">Contact Us</h4>
                        <div className="mb-4 flex flex-col">
                            <span>{`Phone: +91 98339-52804 `}</span>
                        </div>
                        <ul aria-labelledby="Contact" className="footer__contact">
                            <li>
                                <Link href="https://instagram.com">
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://facebook.com">
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:myusenterprises@gmail.com">
                                    <FaEnvelope />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="divider" />

                <span className="footer__bottom">
                    Copyright &copy; Myus Enterprise. All rights reserved.
                </span>
            </div>
        </footer>
    );
}
