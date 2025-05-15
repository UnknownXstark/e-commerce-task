import React from "react";
import ProductDisplay from "../component/ProductDisplay";
import Breadcrums from "../component/Breadcrums";
import DescriptionBox from "../component/DescriptionBox";

const Product = () => {
  return (
    <div>
      <Breadcrums />
      <ProductDisplay />
      <DescriptionBox />
    </div>
  );
};

export default Product;
