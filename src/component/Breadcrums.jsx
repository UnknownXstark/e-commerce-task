import React from 'react';
import './Breadcrum.css';
import { BsChevronBarRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Breadcrums = () => {
  return (
    <div className='breadcrum'>
      <Link to='/'>HOME</Link> <BsChevronBarRight /> <Link to='/mens-shoes'>MENS SHOES</Link> <BsChevronBarRight /> Fashion Sneakers
    </div>
  );
};

export default Breadcrums;
