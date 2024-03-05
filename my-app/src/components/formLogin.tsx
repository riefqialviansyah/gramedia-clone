"use client";

import { useState } from "react";
import { Eye, EyeOff } from "./icon";

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <p className="text-center text-red-600 italic">Error message here</p>
      <form className="p-2" action="">
        <div className="flex flex-col gap-5">
          <div>
            <input
              className="w-full rounded-md h-12 pl-4 border-b-2"
              type="text"
              name="email"
              id=""
              placeholder="Email"
            />
          </div>
          <div className="relative">
            <input
              className="w-full rounded-md h-12 pl-4 border-b-2"
              type={showPassword ? "text" : "password"}
              name="password"
              id="Password"
              placeholder="Password"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          </div>
        </div>
        <p className="text-center my-3">Forgot password?</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("Login");
          }}
          className="bg-slate-300 w-full rounded-md text-2xl p-1 hover:bg-blue-400 hover:text-white"
        >
          Login
        </button>
      </form>
    </>
  );
}
