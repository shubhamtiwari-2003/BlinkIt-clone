import { useState } from "react";
import React from "react";
import Navigation from "./Navigation";
import Products from "./Products";
import data from "../data.js";

const UserProducts = () => {
    const [product, setProduct] = useState(data);
  return (
    <div className="page-main w-[100vw] h-full flex flex-col items-center  content-center justify-center ">
      <Navigation className=""></Navigation>
      <Products product={product}></Products>
    </div>
  );
};

export default UserProducts;
