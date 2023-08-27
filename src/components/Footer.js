import React from 'react';
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineMail,
} from 'react-icons/ai';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import './Footer.css';
import image4 from '../images/image 1.png';
function Footer() {
  return (
    <div className="footer-main">
      <div className="footer">
        <div className="footer-logo">
          <div className="img-logo">
            <img src={image4} alt="logo" />
          </div>
          <div>
            <p>
              Copyright © 2023 Home Loan Advisors -<br /> All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <AiFillYoutube />
            </li>
            <li>
              <AiOutlineInstagram />
            </li>
            <li>
              <AiOutlineMail />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
