import React from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

const MainContainer = () => (
  <div>
    <h2>Shop Cart Example</h2>
    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
);

export default MainContainer;
