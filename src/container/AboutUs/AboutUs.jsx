import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__header app__wrapper app__aboutus app__bg flex__center section__padding" id="about">
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.H} alt="G_overlay" />
    </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Me</h1>
        <img src={images.programmer_icon} alt="programmer_icon" className="programmer_icon" />
        <p className="p__opensans">I'm a software developer specialised in frontend and backend development for complex scalable web apps. </p>
        <button type="button" className="custom__button">Know More</button>


      </div>
      
    </div>
    
  </div>
  
);

export default AboutUs;