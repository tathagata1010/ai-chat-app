import React, { useState, useEffect } from "react";
import {
  AiOutlineUser,
  AiOutlineRobot,
  AiOutlinePaperClip,
} from "react-icons/ai";
import { SiSendinblue } from "react-icons/si"; // Assuming SiSendinblue is the icon for the send button

function Chat() {
  const [inputText, setInputText] = useState("");
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    // Display welcome message on initial load
    if (initialLoad) {
      const newConversation = {
        id: Date.now(),
        messages: [{ sender: "AI", message: "Welcome to the AI Chat App!" }],
      };
      setConversations([newConversation]);
      setSelectedConversation(newConversation);
      setInitialLoad(false);
    }
  }, [initialLoad]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      const userMessage = { sender: "user", message: inputText };
      const aiResponse = {
        sender: "AI",
        message: "This is a dummy response from the AI.",
      };

      // Update the selected conversation with user message and AI response
      const updatedConversation = {
        ...selectedConversation,
        messages: [...selectedConversation.messages, userMessage, aiResponse],
      };

      // Update the conversations array with the updated conversation
      const updatedConversations = conversations.map((conversation) => {
        if (conversation.id === selectedConversation.id) {
          return updatedConversation;
        }
        return conversation;
      });

      setConversations(updatedConversations);
      setSelectedConversation(updatedConversation);
      setInputText(""); // Clear the input field after sending the message
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleNewChatClick = () => {
    const newConversation = {
      id: Date.now(),
      messages: [{ sender: "AI", message: "New conversation started!" }],
    };
    setConversations([...conversations, newConversation]);
    setSelectedConversation(newConversation);
    setInputText("");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // Handle file upload logic here
    console.log("Uploaded file:", file);
  };

  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* Left pane for conversations */}
      <div className="w-1/4 bg-gray-800 p-4">
        <h2 className="text-xl font-semibold mb-4 text-white">Conversations</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4 focus:outline-none"
          onClick={handleNewChatClick}
        >
          New Chat
        </button>
        <div className="overflow-y-auto max-h-full">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`cursor-pointer p-2 text-left text-gray-300 hover:bg-gray-700 mb-2 rounded ${
                selectedConversation &&
                selectedConversation.id === conversation.id
                  ? "bg-gray-700"
                  : ""
              }`}
              onClick={() => setSelectedConversation(conversation)}
            >
              Conversation {conversation.id}
            </div>
          ))}
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 bg-gray-900 p-4 flex flex-col justify-between">
        <div className="overflow-y-auto">
          {selectedConversation ? (
            selectedConversation.messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 flex items-center ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender !== "user" && (
                  <AiOutlineRobot size={24} color="white" className="mr-2" />
                )}
                <div
                  className={`py-2 px-3 rounded ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white rounded-l-md"
                      : "bg-gray-800 text-white rounded-r-md"
                  }`}
                >
                  {message.message}
                </div>
                {message.sender === "user" && (
                  <AiOutlineUser size={24} color="white" className="ml-2" />
                )}
              </div>
            ))
          ) : (
            <div className="text-center text-gray-600">
              No conversation selected. Start a new chat or select one from the
              list.
            </div>
          )}
        </div>

        {/* Input field and send button */}
        <div className="mt-4 flex items-center">
          <div className="relative flex-1">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="border rounded-l py-2 px-4 h-auto focus:outline-none bg-gray-900 border-gray-800 border-solid text-gray-200 focus:border-slate-800 w-full pl-10 pr-12"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSendMessage}
              className="absolute top-2 right-3 text-white rounded-r align-middle focus:outline-none"
            >
              <SiSendinblue className="h-[22px] w-[22px] " />
            </button>
            <label
              className="absolute left-3 top-2 cursor-pointer"
              htmlFor="file-upload"
            >
              <AiOutlinePaperClip
                className="h-[25px] w-[25px] "
                color="white"
              />
            </label>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
