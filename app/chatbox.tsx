// components/ChatBox.js
import React, { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    setMessages([...messages, { type: "user", text: userInput }]);
    // Here, you can call the dare/scare logic function and get the bot's reply.
    const botReply = "This is a bot reply"; // Replace this with a function call to get the bot's reply.
    setMessages([
      ...messages,
      { type: "user", text: userInput },
      { type: "bot", text: botReply },
    ]);
    setUserInput("");
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg w-full max-w-md mx-auto mt-10">
      <div className="overflow-y-auto h-64">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`my-2 p-2 rounded-lg ${
              message.type === "user"
                ? "bg-blue-300 ml-auto"
                : "bg-green-300 mr-auto"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="flex-1 p-2 rounded-lg border"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
