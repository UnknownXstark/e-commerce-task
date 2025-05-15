import React from 'react';
import './CategoryDropdown.css';
import { Link } from 'react-router-dom';

function CategoryDropdown() {
  return (
    <div className="dropdown-wrapper">
      <button className="category-btn">Categories</button>
      <div className="dropdown-menu">
        <ul>
          <li><Link style={{textDecoration:'none'}} to='/mens-clothing'>Men's Clothing</Link></li>
          <li><Link style={{textDecoration:'none'}} to='/mens-shoes'>Men's Shoes</Link></li>
          <li><Link style={{textDecoration:'none'}} to='/electronics'>Electronics</Link></li>
          <li><Link style={{textDecoration:'none'}} to='/womens-clothing'>Women's Clothing</Link></li>
          <li><Link style={{textDecoration:'none'}} to='/womens-shoes'>women's shoes</Link></li>
          <li><Link style={{textDecoration:'none'}} to='/sports-&-outdoors'>Sports & Outdoors</Link></li>
          <li><Link style={{textDecoration:'none'}} to='/health'>Health</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default CategoryDropdown;
