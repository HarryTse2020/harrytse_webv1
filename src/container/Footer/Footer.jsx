import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

import './Footer.css';

const Footer = () => (
  <div className="app__bg app__footer section__padding" id="login">


      <div className="app__footer-links_logo">
        {/* <img src={images.gericht} alt="footer_logo" /> */}
        <p className="p__opensans">&quot;I'm a software developer.Based in Toronto.&quot;</p>
        <div className="app__footer-links_icons">
        <a href="https://www.facebook.com/harry.tse.9?mibextid=kFxxJD" target="_blank" rel="noreferrer"><FiFacebook /></a>
        <a href="https://www.linkedin.com/in/harrytse1997" target="_blank" rel="noreferrer"><CiLinkedin /></a>
        <a href="https://www.instagram.com/harry_tse22?igsh=MW5qejBkZmg1cWNyaQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"><FiInstagram /></a>
        <a href="https://twitter.com/t_harry2024" target="_blank" rel="noreferrer"><FiTwitter /></a>
        <a href="https://wa.me/85294800638" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        </div>
      </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Harry Tse. All Rights reserved.</p>
    </div>
  </div>
    );


export default Footer;
