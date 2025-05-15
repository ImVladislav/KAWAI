import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const ChatComponent = () => {
   const [message, setMessage] = useState('');
   const [chatHistory, setChatHistory] = useState([]);
   const chatContainerRef = useRef(null);
   const chatHistoryKey = 'chatHistory';

   useEffect(() => {
      const savedHistory =
         JSON.parse(sessionStorage.getItem(chatHistoryKey)) || [];
      setChatHistory(savedHistory);
      scrollToBottom();
   }, []);

   const saveChatHistory = (newHistory) => {
      sessionStorage.setItem(chatHistoryKey, JSON.stringify(newHistory));
   };

   const scrollToBottom = () => {
      if (chatContainerRef.current) {
         chatContainerRef.current.scrollTop =
            chatContainerRef.current.scrollHeight;
      }
   };

const handleSendMessage = async (e) => {
   e.preventDefault();
   if (!message) return;

   const newUserMessage = { message, isUser: true };
   const botTypingMessage = { message: 'Kiota is typing...', isUser: false };

   // Локальна змінна для історії чату
   const currentHistory = [...chatHistory, newUserMessage];

   // Оновлення історії в UI
   setChatHistory([...currentHistory, botTypingMessage]);
   saveChatHistory([...currentHistory, botTypingMessage]);

   setMessage('');

   try {
      const backendUrl = 'https://ai-backend-z123.onrender.com/chat';

      // Витягуємо лише тексти (щоб були рядки, не об’єкти)
      const historyForBackend = currentHistory.map((entry) => entry.message).slice(-10);

      const response = await fetch(backendUrl, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ messages: historyForBackend })
      });

      if (!response.ok)
         throw new Error(`${response.status} ${response.statusText}`);
      
      const data = await response.json();
      const botMessage = { message: data.reply, isUser: false };

      const updatedHistory = [...currentHistory, botMessage];

      setChatHistory(updatedHistory);
      saveChatHistory(updatedHistory);
   } catch (error) {
      const errorMessage = {
         message: `Error: ${error.message || 'Error sending request'}`,
         isUser: false
      };

      const fallbackHistory = [...currentHistory, errorMessage];

      setChatHistory(fallbackHistory);
      saveChatHistory(fallbackHistory);
   }
};

   return (
      <div
         className='shadow-sm bg-[#1a1a1a] bg-opacity-90 border border-[#157e05] rounded-lg p-4 w-full md:w-[800px] h-[600px] flex flex-col'
         style={{
            backgroundImage:
               "url('/images/forChat.gif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
         }}
      >
         {/* Чат */}
         <div
            className='flex-1 overflow-y-auto mb-4 space-y-4 scrollbar-thin scrollbar-thumb-[#4AFF91] scrollbar-track-[#1a2a1a] text-white'
            ref={chatContainerRef}
         >
            {chatHistory.map((entry, index) => (
               <div
                  key={index}
                  className={`flex items-start gap-3 ${
                     entry.isUser ? 'justify-end' : ''
                  }`}
               >
                  {/* Иконка пользователя */}
                  {entry.isUser ? (
                     <div className='w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0'>
                        <span className='text-white text-[18px]'>U</span>
                     </div>
                  ) : (
                     <div className='w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0'>
                        <Image
                           alt='Bot'
                           loading='lazy'
                           width={40}
                           height={40}
                           className='object-cover'
                           src='/images/11.jpg'
                        />
                     </div>
                  )}

                  {/* Сообщение */}
                  <div
                     className={`flex-1 break-words whitespace-pre-wrap [overflow-wrap:anywhere] border rounded text-[18px]  ${
                        entry.isUser ? "text-white border-[#FFFFFF] px-2 z-20 bg-gray-800 bg-opacity-25 z-50"
                        : 'text-[#4AFF91] border-[#4AFF91] px-2 z-20 bg-green-800 bg-opacity-25 z-50'
                     }`}
                  >
                     {entry.message}
                  </div>
               </div>
            ))}
         </div>

         {/* Поле ввода */}
         <form className='flex space-x-2 font-[edo]' onSubmit={handleSendMessage}>
            <input
               className='flex-grow h-10 border px-3 py-2 bg-[#2a2a2a] border-[#157e05] text-white rounded'
               placeholder='Enter your message...'
               value={message}
               onChange={(e) => setMessage(e.target.value)}
            />
            <button className='h-10 px-4 bg-[#157e05] text-white rounded'>
               Send
            </button>
         </form>
      </div>
   );
};

export default ChatComponent;
