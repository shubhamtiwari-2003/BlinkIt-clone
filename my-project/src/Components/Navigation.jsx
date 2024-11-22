import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import Cart from "./Cart";
import Login from "./Login";

function Navigation() {
  const [cart, setCart] = useState(false);
  const [login, setLogin] = useState(false);

  function cartHandler() {
    setCart(!cart);
  }
  function loginHandler() {
    setLogin(!login);
  }

  return (
    <div>
      {cart ? <Cart cart={cartHandler}></Cart> : <></>}
      {login ? <Login login={loginHandler}></Login> : <></>}
      <div className="">
        <div className="nav-bar flex flex-row justify-between  items-center w-[100vw] h-[100px] overflow-y-hidden bg-white border-2 border-gray-100 ">
          <img
            className=" border-2 border-gray-100 logo object-fill h-[180px] m-2"
            src="/images/vendit.png"
          ></img>
          <div className="location">
            <div className="font-bold  font-mono text-xl">
              At Your One Click
            </div>
            <div className="font-thin text-md">Old Boys Hostel</div>
          </div>

          <input
            className="w-[600px] h-[65px] bg-gray-100 p-4 border-gray-100 border-2 rounded-xl font-bold"
            type="search"
            placeholder="Search"
          ></input>
          <div className="font-light text-xl cursor-pointer" onClick={loginHandler} >Login</div>
          <div
            onClick={cartHandler}
            className="cart-button flex flex-row justify-between p-2 content-center items-center text-white font-bold bg-green-700 w-[120px] h-[50px] rounded-lg mx-10 text-lg"
          >
            <BsCart3 className="h-[60px]" />
            <button className=""> My Cart</button>
          </div>
        </div>

        <div className="navbar-lists drop-shadow-md">
          <ul className="flex flex-row justify-center items-center gap-6 text-gray-600 w-[100vw] h-[50px] border-2 border-gray-100 text-sm min-w-5">
            <li>Vegetables & Fruits</li>
            <li>Dairy & Breakfast </li>
            <li>Munchies</li>
            <li>Cold Drink & Juices</li>
            <li>Instant & Fronzen Food</li>
            <li>Tea, coffee & Health Drinks</li>
            <li>Bakery & Biscuits</li>
            <label for="more">More</label>
            <select name="more" id=""></select>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
