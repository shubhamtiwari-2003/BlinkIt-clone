import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  function cartButtonHandler() {
    setCount(count + 1);
    setFlag(false);
  }
  function decrementHandler() {
    setCount(count - 1);
    if (count === 1) {
      setFlag(true);
    }
  }
  function incrementHandler() {
    setCount(count + 1);
  }
  return (
    <>
      {flag ? (<button onClick={cartButtonHandler} className="add-cart-button border-[1px] w-14 h-6 text-xs font-sans text-green-700 border-green-700 rounded-md px-4 py-1 content-center justify-center items-center">ADD</button>
      ) : (<div className=" text-xs font-sans text-white bg-green-700 border-green-700 rounded-md px-4 py-1 flex flex-row content-center justify-center items-center w-14 h-6">
        <button className=" font-bold text-xs font-sans text-white rounded-md mx-2 p-1 " onClick = {decrementHandler} > - </button>
        <div className="text-xs">{count}</div>
        <button className="font-bold text-xs font-sans text-white rounded-md  mx-2 p-1" onClick ={incrementHandler}>+</button>
        </div>)}
    </> 
  );
}

export default Button;
