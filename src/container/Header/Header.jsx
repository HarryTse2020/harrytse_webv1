import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__bg app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="" />
      <h1 className="app__header-h1">Tse Siu Ki</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}> Skilled Computer Programmer producing code quickly and accurately.  Well-versed in Agile methodologies and working in both independent and team-based capacities. </p>
      {/* <button type="button" className="custom__button"><a href="#home">Home</a>Contact Me</button> */}
    </div>

    <div className="app__wrapper_img">
      <img src={images.harry_icon2} alt="header_img" />
    </div>
  </div>
);

export default Header;