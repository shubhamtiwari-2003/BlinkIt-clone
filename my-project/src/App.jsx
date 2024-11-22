import "./App.css";
import { Routes,Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import UserProducts from "./Components/UserProducts.jsx";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Home/>}  />
        <Route
          path="/products"
          element={<UserProducts/>}
        ></Route>
        <Route path="/login" element={<login/>} />
        <Route path=" "></Route>
      </Routes>
    </div>
  );
}

export default App;
