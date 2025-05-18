import React from "react";
import "./Popular.css";
import Items from "./items";

const Popular = () => {
  return (
    <div className="popular">
      <h1>ON DEMAND PRODUCTS</h1>
      <hr />
      <div className="popular-item">
        <Items />
      </div>
    </div>
  );
};

export default Popular;
