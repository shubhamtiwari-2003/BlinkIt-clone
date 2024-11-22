import React from 'react'
import { MdClose } from "react-icons/md";

function Cart({cart}) {
  return (
    <div className="z-50 relative">
        <div onClick={cart}  className="left w-[72vw] h-[100vh] bg-slate-950 fixed top-0 left-0 opacity-80">
        </div>
        <div className="cart h-[100vh] w-[28vw] bg-white flex fixed right-0 justify-center">
        Your Cart is Empty 
        <MdClose onClick={cart} className='fixed top-3 right-3 text-4xl cursor-pointer'/>    
        </div>
    </div>)
    
  
}

export default Cart