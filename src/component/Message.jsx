import Avatar from "../image/dashboard.png";
import { useState, useRef } from "react";
import Navbar from "./Navbar";
import { ChevronLeft, ImageIcon, Paperclip, Smile } from "lucide-react";
import { IoMdSend } from "react-icons/io";
import useMediaQuery from "./hooks/useMediaQuery";

// Use placeholder for avatar
// const Avatar = "../image/Avatar.svg"

const Messages = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedChat, setSelectedChat] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [activeTab, setActiveTab] = useState("focused");

  const messages = [
    {
      id: 1,
      name: "Hamish March",
      title: "HR Manager · Grameenphone",
      message: "You: Thank you very much for your support...",
      avatar: Avatar,
      pinned: true,
      online: true,
      timestamp: "Feb 5, 2025 12:00 PM",
    },
    {
      id: 2,
      name: "Hamish2 March",
      title: "HR Manager · Grameenphone",
      message: "You: Thank you very much for your support...",
      avatar: Avatar,
      pinned: false,
      online: true,
      timestamp: "Feb 5, 2025 11:00 AM",
    },
    {
      id: 3,
      name: "Hamish3 March",
      title: "HR Manager · Grameenphone",
      message: "You: Thank you very much for your support...",
      avatar: Avatar,
      pinned: true,
      online: true,
      timestamp: "Feb 4, 2025 01:00 PM",
    },
    {
      id: 4,
      name: "Hamish4 March",
      title: "HR Manager · Grameenphone",
      message: "You: Thank you very much for your support...",
      avatar: Avatar,
      pinned: false,
      online: false,
      timestamp: "Feb 3, 2025 10:00 AM",
    },
    {
      id: 5,
      name: "Hamish5 March",
      title: "HR Manager · Grameenphone",
      message: "You: Thank you very much for your support...",
      avatar: Avatar,
      pinned: true,
      online: true,
      timestamp: "Feb 2, 2025 03:00 PM",
    },
    {
      id: 6,
      name: "Hamish7 March",
      title: "HR Manager · Grameenphone",
      message: "You: Thank you very much for your support...",
      avatar: Avatar,
      pinned: false,
      online: false,
      timestamp: "Feb 1, 2025 05:00 PM",
    },
    {
      id: 7,
      name: "Hamish6 March",
      title: "HR Manager · Grameenphone",
      message: "You: Thank you very much for your support...",
      avatar: Avatar,
      pinned: true,
      online: true,
      timestamp: "Jan 31, 2025 08:00 AM",
    },
    {
      id: 8,
      name: "Hamish8 March",
      title: "HR Manager · Grameenphone",
      message: "You: Thank you very much for your support...",
      avatar: Avatar,
      pinned: false,
      online: false,
      timestamp: "Jan 30, 2025 11:00 AM",
    },
    // Adding more messages to demonstrate scrolling
    {
      id: 9,
      name: "Hamish10 March",
      title: "HR Manager · Grameenphone",
      message: "You: Thank you very much for your support...",
      avatar: Avatar,
      pinned: false,
      online: true,
      timestamp: "Jan 29, 2025 09:00 AM",
    },
    {
      id: 10,
      name: "Hamish12 March",
      title: "HR Manager · Grameenphone",
      message: "You: Thank you very much for your support...",
      avatar: Avatar,
      pinned: true,
      online: false,
      timestamp: "Jan 28, 2025 02:30 PM",
    },
  ];

  // Mock chat messages
  const chatMessages = [
    {
      id: 1,
      sender: "other",
      message:
        "Thank you for joining us today, can you start by telling us a little about yourself and your background?",
      timestamp: "May 21, 2020, 7:51 PM",
    },
    {
      id: 2,
      sender: "me",
      message:
        "Of course! I have knowledge in UI/UX, and I’ve spent the last three years working as a UI/UX designer at a company.",
      timestamp: "May 21, 2020, 7:51 PM",
    },
    // Adding more messages to demonstrate scrolling
    {
      id: 3,
      sender: "other",
      message:
        "That's great! We're always looking for innovative approaches to improve user experience.",
      timestamp: "May 21, 2020, 7:55 PM",
    },
    {
      id: 4,
      sender: "me",
      message:
        "I've been focusing on responsive design and accessibility to ensure all users have a seamless experience.",
      timestamp: "May 21, 2020, 7:58 PM",
    },
    {
      id: 5,
      sender: "other",
      message:
        "Accessibility is definitely a priority for us. What specific techniques are you implementing?",
      timestamp: "May 21, 2020, 8:02 PM",
    },
    {
      id: 6,
      sender: "me",
      message:
        "I'm using semantic HTML, ensuring proper contrast ratios, implementing keyboard navigation, and adding ARIA attributes where needed.",
      timestamp: "May 21, 2020, 8:05 PM",
    },
  ];

  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
      // Handle file upload logic here
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const openChat = (chatId) => {
    setSelectedChat(chatId);
  };

  const closeChat = () => {
    setSelectedChat(null);
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Render message list view
  const renderMessageList = () => (
    <div className=" flex flex-col h-full bg-white border-t border-gray-200">
      {/* Navigation Tabs - iOS Style */}
      <div className="flex items-center px-3 py-3 border-b border-gray-200 flex-shrink-0">
        <span className="text-sm font-medium mr-4">Messages</span>
        <span
          className={`text-sm font-medium px-2 py-1 ms-16 rounded-full mr-4 cursor-pointer ${
            activeTab === "focused"
              ? "bg-blue-100 text-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("focused")}
        >
          Focused
        </span>
        <span
          className={`text-sm font-medium px-2 py-1 mr-4 rounded-full cursor-pointer ${
            activeTab === "others"
              ? "bg-blue-100 text-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("others")}
        >
          Others
        </span>
      </div>

      {/* Message List - With proper scrolling */}
      <div className="flex-1 overflow-y-auto">
        {messages
          .filter((msg) => (activeTab === "focused" ? msg.pinned : true))
          .map((msg) => (
            <div
              key={msg.id}
              className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-none"
              onClick={() => openChat(msg.id)}
            >
              <div className="relative">
                <img
                  src={msg.avatar || "/placeholder.svg"}
                  alt={msg.name}
                  className="w-10 h-10 rounded-full"
                />
                {msg.online && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </div>
              <div className="ml-3 flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-gray-900">
                    {msg.name}
                  </p>
                  <div className="flex items-center">
                    <p className="text-xs text-gray-500 mr-1">
                      {formatTime(msg.timestamp)}
                    </p>
                    {msg.pinned && (
                      <span className="h-2 w-2 bg-pink-500 rounded-full"></span>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-500">{msg.title}</p>
                <p className="text-xs text-gray-500 truncate">{msg.message}</p>
              </div>
              <div className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  // Render chat view
  const renderChatView = () => (
    <div className="  flex flex-col h-full bg-white border-t border-gray-200">
      {/* Chat Header */}
      <div className="px-4 py-2 flex items-center justify-between border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <button
            onClick={closeChat}
            className="text-blue-500 flex items-center"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <img
            src={Avatar || "/placeholder.svg"}
            alt="Hamish March"
            className="w-8 h-8 rounded-full"
          />
          {/* Center: Name and Designation */}
          <div className="flex flex-col">
            <h2 className="text-sm font-medium">Hamish March</h2>
            <p className="text-xs text-gray-500">HR Manager · Grameenphone</p>
          </div>
        </div>

        <div className="flex items-center  space-x-4">
          <div className="justify-end items-end ">
            {" "}
            <button className="text-blue-600 text-sm font-medium hidden md:block">
              View Profile
            </button>
          </div>
          <button className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75
                 12a.75.75 0 11-1.5
                 0 .75.75 0 011.5
                 0zM18.75
                 12a.75.75
                 0
                 11-1.5
                 0 .75.75
                 0
                 011.5
                 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Chat Messages - With proper scrolling */}
      <div className="flex-1 p-4 overflow-y-auto  ">
        <div className="text-center text-xs text-gray-500 mb-4">Today</div>
        <div className="space-y-4">
          {chatMessages.map((chatMessage) => (
            <div
              key={chatMessage.id}
              className={`flex items-start space-x-3 ${
                chatMessage.sender === "me" ? "justify-end" : ""
              }`}
            >
              {chatMessage.sender === "other" && (
                <img
                  src={Avatar || "/placeholder.svg"}
                  alt="Other Avatar"
                  className="w-8 h-8 rounded-full"
                />
              )}
              <div>
                <div
                  className={`${
                    chatMessage.sender === "me"
                      ? "bg-blue-500 text-white rounded-2xl rounded-br-sm"
                      : "bg-gray-300 text-black rounded-2xl rounded-bl-sm"
                  } px-3 py-2`}
                >
                  <p className="text-sm">{chatMessage.message}</p>
                </div>
                <p
                  className={`text-xs text-gray-400 mt-1 ${
                    chatMessage.sender === "me" ? "text-right" : ""
                  }`}
                >
                  {formatTime(chatMessage.timestamp)}
                </p>
              </div>
              {chatMessage.sender === "me" && (
                <img
                  src={Avatar || "/placeholder.svg"}
                  alt="My Avatar"
                  className="w-8 h-8 rounded-full"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="px-4 py-3 border-t border-gray-200 bg-white flex-shrink-0">
        <div className="flex items-center  rounded-full px-3 py-1 border border-gray-200">
          <input
            type="text"
            placeholder="Message"
            className="flex-1 px-2 py-2 text-sm focus:outline-none bg-transparent"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex items-center space-x-1 pe-12 ">
            <input
              type="file"
              id="fileInput"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileUpload}
            />
            <button onClick={triggerFileInput} className="text-gray-500 p-0">
              <Paperclip className="h-5 w-5" />
            </button>
            <button className="text-gray-500 p-0">
              <Smile className="h-5 w-5" />
            </button>
            <button className="text-gray-500 p-0">
              <ImageIcon className="h-5 w-5" />
            </button>
            <button className="text-gray-500 p-0">
              <IoMdSend className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="lg:ms-16 lg:me-16 flex flex-col h-[calc(100vh-64px)] ">
        <div className="flex flex-1 overflow-hidden">
          {/* Desktop: Show both views side by side */}
          {!isMobile ? (
            <div className="w-full flex h-full">
              <div className="w-80 border-r border-gray-200">
                {renderMessageList()}
              </div>
              <div className="flex-1 h-full">
                {selectedChat ? (
                  renderChatView()
                ) : (
                  <div className="h-full flex items-center justify-center  text-gray-500">
                    Select a conversation to start messaging
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Mobile: Show either message list or chat view */
            <div className="w-full h-full">
              {selectedChat ? renderChatView() : renderMessageList()}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Messages;
