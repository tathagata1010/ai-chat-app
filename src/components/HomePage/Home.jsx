import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the AI Chat App</h1>
        <p className="text-lg mb-8">
          Your trusted companion for Financial Fraud Detection
        </p>
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300"
        >
          Login
        </Link>
      </div>
      <div className="absolute top-0 right-0 p-4">
        <img
          src="https://via.placeholder.com/80"
          alt="AI Logo"
          className="w-16 h-16 rounded-full border-4 border-blue-500"
        />
      </div>
    </div>
  );
}

export default Home;
