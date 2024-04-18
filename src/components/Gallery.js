import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Group1 from '../images/Group11.png'

const Gallery = () => {


  return (
    <div>
        <div className="flex justify-center my-[50px]">
            <img src={Group1} alt="" />
        </div>
    </div>
  );
};

export default Gallery;
