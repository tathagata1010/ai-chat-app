import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy usernames and passwords
    const dummyCredentials = [
      { username: "protyusha", password: "psw123" },
      { username: "tathagata", password: "psw123" },
      { username: "rajdeep", password: "psw123" },
      { username: "anirrudha", password: "psw123" },
      { username: "sayan", password: "psw123" },
      { username: "debmalya", password: "psw123" },
      { username: "shyam", password: "psw123" },
      { username: "tanoy", password: "psw123" },
    ];

    // Check if the entered username and password match any dummy credentials
    const validCredentials = dummyCredentials.find(
      (cred) => cred.username === username && cred.password === password
    );

    if (validCredentials) {
      // Here you can add your logic for successful login
      console.log("Login successful!");
      navigate("/chat");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-[#1a294e] min-h-[485px] shadow-md rounded px-14 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl text-center font-bold text-[#bcd1ff] mb-6">
            Login
          </h2>
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-[#bcd1ff] text-sm font-bold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="shadow appearance-none border rounded w-full mb-10 py-2 px-3 bg-slate-300 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-[#bcd1ff] text-sm font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 bg-slate-300 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center mt-24 justify-center">
            <button
              type="submit"
              className="bg-[#bcd1ff] hover:bg-[#a3b1d3] text-gray-950 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
