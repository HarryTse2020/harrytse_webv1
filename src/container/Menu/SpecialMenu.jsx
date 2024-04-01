import React from 'react';

import { data } from '../../constants';
import './SpecialMenu.css';

const AwardCard = ({ award: { imgUrl ,title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <div className="app__laurels_awards-card_content">
      <img src={imgUrl} alt="awards" />
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const AwardCard2 = ({ award2: { imgUrl,title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <div className="app__laurels_awards-card_content">
      <img src={imgUrl} alt="awards" />
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);


const SpecialMenu = () => (
  <div className=" app__bg app__specialMenu flex__center section__padding" id="about">
    <div className="app__specialMenu-title">
        <h1 className="headtext__cormorant">What I do</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">I have 3 Years of working experience building software in international company. Below is a quick overview of my main technical skill sets and technologies I use.</p>
      </div>

    </div>
    <div className="app__laurels_awards_row1">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>

      <div className="app__laurels_awards_row2">
        {data.award2.map((award2) => <AwardCard2 award2={award2} key={award2.title} />)}
      </div>

    <div style={{ marginTop: 15 }}>

          <a className="custom__button_downloadresume" href="Resume.pdf" download="Resume.pdf">Download Resume</a>
    </div>
  </div>
);




export default SpecialMenu;