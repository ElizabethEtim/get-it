import logo from "./Assets/logo.png";
import { FaFacebookF, FaInstagram, FaPhone, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-brand">
        <div className="footer-logo-wrapper">
          <img src={logo} alt="Get It" className="footer-logo" />
        </div>
        <p>
          Your trusted partner for modern property management and
          other services, making life easier for landlords and renters
          alike.
        </p>
      </div>

      <div className="footer-contact">
        <h2>Contact Us</h2>
        <div className="footer-contact-links">
          <a href="tel:+2347068537761" aria-label="Call Us">
            <FaPhone aria-hidden="true" />
          </a>
          <a href="mailto:lizzaetim961@gmail.com" aria-label="Email Us">
            <SiGmail aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer-social">
        <h2>Follow Us</h2>
        <div className="footer-social-links">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram aria-hidden="true" />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
          >
            <FaXTwitter aria-hidden="true" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="footer-legal">
        <span>Privacy Policy</span>
        <span>Terms of Usage</span>
      </div>
      <p>&copy; {new Date().getFullYear()} Get It. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
