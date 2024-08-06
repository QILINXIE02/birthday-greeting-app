import React from 'react';
import photo from '../assets/default-photo.jpg';

const DefaultPhoto = () => (
  <div>
    <img src={photo} alt="Default" className="default-photo" />
  </div>
);

export default DefaultPhoto;
