import React from 'react';
import './Breadcrum.css';
import { BsChevronBarRight } from 'react-icons/bs';

const Breadcrums = () => {
  return (
    <div className='breadcrum'>
      HOME <BsChevronBarRight /> SHOP <BsChevronBarRight /> MENS SHOES <BsChevronBarRight /> Fashion Sneakers
    </div>
  );
};

export default Breadcrums;
