/* eslint-disable tailwindcss/no-custom-classname */
// /* eslint-disable tailwindcss/no-custom-classname */
// // /* eslint-disable tailwindcss/no-custom-classname */
// "use client"

// // // components/Chatbot.tsx
// // import axios from 'axios';
// // import React, { useState, useEffect, useRef } from 'react';
// // import ReactMarkdown from 'react-markdown';
// // import remarkGfm from 'remark-gfm';

// // interface ChatMessage {
// //   text: string;
// //   sender: 'user' | 'bot';
// // }

// // const Chatbot: React.FC = () => {
// //   const [messages, setMessages] = useState<ChatMessage[]>([]);
// //   const [userInput, setUserInput] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [isChatOpen, setIsChatOpen] = useState(false);
// //   const messagesEndRef = useRef<HTMLDivElement>(null);

// //   const scrollToBottom = () => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// //   };

// //   useEffect(scrollToBottom, [messages]);

// //   const handleSendMessage = async () => {
// //     if (!userInput.trim()) return;

// //     const newUserMessage: ChatMessage = { text: userInput, sender: 'user' };
// //     setMessages(prevMessages => [...prevMessages, newUserMessage]);
// //     setUserInput('');
// //     setLoading(true);

// //     try {
// //       const response = await axios.post('/api/chatbot', { userInput }, {
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //       });
// //       const botResponse: ChatMessage = { text: response.data.botResponse, sender: 'bot' };
// //       setMessages(prevMessages => [...prevMessages, botResponse]);
// //     } catch (error) {
// //       console.error('Error sending message:', error);
// //       let errorMessage: ChatMessage;
// //       if (axios.isAxiosError(error)) {
// //         if (error.response?.status === 405) {
// //           errorMessage = { text: 'Sorry, the chatbot API is not available. Please check the server configuration.', sender: 'bot' };
// //         } else if (error.response?.status === 500) {
// //           errorMessage = { text: 'Sorry, there was an internal server error. Please check if the VITE_GEMINI_API_KEY is set correctly in your .env.local file.', sender: 'bot' };
// //         } else {
// //           errorMessage = { text: 'Sorry, an error occurred. Please try again.', sender: 'bot' };
// //         }
// //       } else {
// //         errorMessage = { text: 'Sorry, an unexpected error occurred. Please try again.', sender: 'bot' };
// //       }
// //       setMessages(prevMessages => [...prevMessages, errorMessage]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
// //     if (e.key === 'Enter' && !e.shiftKey) {
// //       e.preventDefault();
// //       handleSendMessage();
// //     }
// //   };

// //   return (
// //     <div className="fixed bottom-4 right-4 z-50">
// //       <button
// //         className="rounded-full bg-blue-600 px-4 py-2 text-white shadow-lg transition-colors hover:bg-blue-700"
// //         onClick={() => setIsChatOpen(!isChatOpen)}
// //       >
// //         {isChatOpen ? 'Close Chat' : 'Open Chat'}
// //       </button>

// //       {isChatOpen && (
// //         <div className="mt-4 flex h-96 w-80 flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-xl">
// //           <div className="flex-1 space-y-4 overflow-y-auto p-4">
// //             {messages.map((message, index) => (
// //               <div
// //                 key={index}
// //                 className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
// //               >
// //                 <div
// //                   className={`max-w-3/4 rounded-lg p-3 ${
// //                     message.sender === 'user'
// //                       ? 'bg-blue-600 text-white'
// //                       : 'bg-gray-200 text-gray-800'
// //                   }`}
// //                 >
// //                   {message.sender === 'bot' ? (
// //                     <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.text}</ReactMarkdown>
// //                   ) : (
// //                     message.text
// //                   )}
// //                 </div>
// //               </div>
// //             ))}
// //             <div ref={messagesEndRef} />
// //           </div>
// //           <div className="border-t border-gray-300 bg-gray-100 p-4">
// //             <div className="flex items-center">
// //               <input
// //                 type="text"
// //                 value={userInput}
// //                 onChange={(e) => setUserInput(e.target.value)}
// //                 onKeyPress={handleKeyPress}
// //                 disabled={loading}
// //                 className="flex-1 rounded-l-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
// //                 placeholder="Type your message..."
// //               />
// //               <button
// //                 onClick={handleSendMessage}
// //                 disabled={loading}
// //                 className="rounded-r-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
// //               >
// //                 {loading ? 'Sending...' : 'Send'}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Chatbot;


// // components/Chatbot.tsx
// import axios from "axios";
// import React, { useState } from "react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

// // import ShimmerButton from "../../@/components/magicui/shimmer-button";
// // import PulsatingButton from "../../@/components/magicui/pulsating-button";
// import { GEMINI_ENDPOINT, GEMINI_API_KEY } from "../config/constants";
// interface ChatMessage {
//   text: string;
//   sender: "user" | "bot";
// }

// // hello world

// const Chatbot: React.FC = () => {
//   const [messages, setMessages] = useState<ChatMessage[]>([]);
//   const [userInput, setUserInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [isChatOpen, setIsChatOpen] = useState(false);

//   const handleSendMessage = async () => {
//     if (!userInput) return;

//     setMessages([...messages, { text: userInput, sender: "user" }]);
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         `${GEMINI_ENDPOINT}:generateContent?key=${GEMINI_API_KEY}`,
//         {
//           contents: [
//             {
//               parts: [
//                 {
//                   text: userInput,
//                 },
//               ],
//             },
//           ],
//         }
//       );

//       const botResponse = response.data.candidates[0].content.parts[0].text;
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { text: botResponse, sender: "bot" },
//       ]);
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }

//     setLoading(false);
//     setUserInput("");
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50 ">
//       <div className="z-60 flex min-h-[1em] items-center  ">
//         <button
//           className="bg-red-600"
//           onClick={() => setIsChatOpen(!isChatOpen)}
//         >
//           <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
//             {isChatOpen ? "X" : "Chat"}
//           </span>
//         </button>
//       </div>

//       {isChatOpen && (
//         <div className="flex max-h-[500px] w-80 flex-col rounded-lg border border-gray-800 bg-gray-900 shadow-lg">
//           <div className="flex-1 overflow-y-auto border-b border-gray-700 bg-gray-800 p-4">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`my-1 break-words rounded-lg p-3 ${
//                   message.sender === "user"
//                     ? "self-end bg-blue-600 text-white"
//                     : "self-start bg-gray-700 text-gray-300"
//                 }`}
//               >
//                 {message.sender === "bot" ? (
//                   <ReactMarkdown remarkPlugins={[remarkGfm]}>
//                     {message.text}
//                   </ReactMarkdown>
//                 ) : (
//                   <div>{message.text}</div>
//                 )}
//               </div>
//             ))}
//           </div>
//           <div className="flex border-t border-gray-700 bg-gray-900 p-4">
//             <input
//               type="text"
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//               disabled={loading}
//               className="mr-2 flex-1 rounded-lg border border-gray-700 bg-gray-800 p-3 text-white placeholder:text-gray-500"
//               placeholder="Enter a message."
//             />
//             <button
//               onClick={handleSendMessage}
//               disabled={loading}
//               className="cursor-pointer rounded-lg border-none bg-blue-600 px-5 py-2 text-white transition-colors hover:bg-blue-500"
//             >
//               {loading ? "Processing" : "Send"}
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;
"use client"
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { GEMINI_ENDPOINT, GEMINI_API_KEY } from "../config/constants";

interface ChatMessage {
  text: string;
  sender: "user" | "bot";
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSendMessage = async () => {
    if (!userInput) return;

    setMessages([...messages, { text: userInput, sender: "user" }]);
    setLoading(true);

    try {
      const response = await fetch(
        `${GEMINI_ENDPOINT}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: userInput,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const botResponse = data.candidates[0].content.parts[0].text;
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setLoading(false);
    setUserInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="z-60 flex min-h-[1em] items-center">
        <button
          className="rounded-full bg-indigo-600 p-3 text-white shadow-lg transition-all hover:bg-indigo-700"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <span className="text-sm font-medium">
            {isChatOpen ? "Close" : "Chat"}
          </span>
        </button>
      </div>

      {isChatOpen && (
        <div className="mt-4 flex h-[500px] w-96 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-2xl">
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`my-2 flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-800 shadow"
                  }`}
                >
                  {message.sender === "bot" ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {message.text}
                    </ReactMarkdown>
                  ) : (
                    <div>{message.text}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 bg-white p-4">
            <div className="flex items-center">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                disabled={loading}
                className="mr-2 flex-1 rounded-full border border-gray-300 bg-gray-50 p-2 text-gray-800 focus:border-indigo-500 focus:outline-none"
                placeholder="Type a message..."
              />
              <button
                onClick={handleSendMessage}
                disabled={loading}
                className="rounded-full bg-indigo-600 p-2 text-white transition-colors hover:bg-indigo-700"
              >
                {loading ? (
                  <svg className="size-6 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
