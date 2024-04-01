import React from 'react';

import { SubHeading } from '../../components';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Contact</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Interested in hiring me for your project or just want to say hi? You can call me  or send me an email.^.^</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Information</p>
        <p className="p__opensans">Email: harrytse1997@gmail.com </p>
        <p className="p__opensans">phone: +1(647)323-9480</p>
      </div>
      {/* <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button> */}
    </div>

    {/* <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div> */}
  </div>
);

export default FindUs;