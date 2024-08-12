import "./Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">RPJ Garments</h2>

        <hr className="divider" />

        <div className="footer__nav">
          <div>
            <h4 id="Need Help">Need Help</h4>
            <ul aria-labelledby="Need Help">
              <li>Track Order</li>
              <li>FAQ's</li>
              <li>Terms and Conditions</li>
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
          Copyright &copy; RPJ Garments. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
