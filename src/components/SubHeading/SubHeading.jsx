import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.programmer_icon} alt="programmer_icon" className="programmer_icon" />
  </div>
);

export default SubHeading;