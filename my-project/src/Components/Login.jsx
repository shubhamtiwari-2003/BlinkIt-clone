import React from "react";

const Login = ({login}) => {
  return (
    <div >
        <div className="bg-slate-950  h-[100vh] w-[100vw] flex justify-center items-center absolute z-1000">
            <div className="text-white">
                <div className="w-96 h-60 rounded-xl flex-row justify-items-center items-center text-center  bg-white text-black ">
                    <img
                    className="object-fill w-auto h-20"
                    src="/images/vendit.png"
                    ></img>
                    <label className="font-bold" for="phone">
                    Log in or Sign Up
                    </label>
                        <input
                        type="tel"
                        id="phone"
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        className="border-2 rounded-sm p-1 m-2"
                        ></input>
                    <button className="mt-6 rounded-md bg-green-600 px-3 py-1" onClick={login}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;
