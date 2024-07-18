import { useState } from "react";
import "./App.css";
import data from "./data.js";
import Products from "./Components/Products.jsx";
import Navigation from "./Components/Navigation.jsx";

function App() {

  const [product,setProduct]= useState(data);
  return (
    <div  className="page-main w-[100vw] h-full flex flex-col items-center  content-center justify-center ">
      <Navigation className=""></Navigation>
      <Products product= {product}></Products>
    </div>
  );
}

export default App;
