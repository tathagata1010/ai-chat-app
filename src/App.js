import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./components/LoginPage/LoginScreen";
import Home from "./components/HomePage/Home";
import Chat from "./components/AiChatPage/Chat";

function App() {
  return (
    <div className="App bg-[#0F172A]">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
