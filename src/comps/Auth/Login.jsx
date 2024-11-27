import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#111]">
      <div className="border border-emerald-400 rounded-lg p-10 md:p-20">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            className="outline-none bg-transparent border-emerald-400 border rounded-full mt-3 md:text-lg p-3  placeholder:text-gray-400"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            className="outline-none bg-transparent 
            border-emerald-400 border rounded-full mt-3 md:text-lg p-3 placeholder:text-gray-400"
            placeholder="Enter Password"
          />

          <button className="outline-none bg-emerald-600 border-none mt-5 rounded-full md:text-lg py-3 px-5 ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
