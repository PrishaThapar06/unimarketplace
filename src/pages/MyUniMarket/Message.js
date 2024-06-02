import React, { useState } from 'react';
import Nav from './Nav';
import { IoFilterSharp } from "react-icons/io5";
import Logo from '../../assets/images/logo_findmyuni.jpeg';

const Message = () => {
  const [val, setVal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const messages = [
    {
      id: 1,
      sender: 'UniMarket',
      senderEmail: 'sender1@example.com',
      content: 'Hello! We wanted to reach out and welcome you to UniMarket. Feel free to explore our platform and let us know if you have any questions. We\'re here to help you every step of the way.',
      receivedDate: 'June 2, 2024'
    },
    {
      id: 2,
      sender: 'MarketPlace',
      senderEmail: 'sender2@example.com',
      content: 'Thank you for joining MarketPlace. We are excited to have you with us.',
      receivedDate: 'June 3, 2024'
    },
    {
      id: 3,
      sender: 'StudyBuddy',
      senderEmail: 'sender3@example.com',
      content: 'Welcome to StudyBuddy. Let us know if you need any assistance.',
      receivedDate: 'June 4, 2024'
    },
  ];

  return (
    <>
      <Nav />
      <div className='m-12'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold'>All Messages</h1>
          <button className='flex items-center ml-4 px-8 py-2 bg-white text-black rounded-full border border-black space-x-2'>
            <IoFilterSharp />
            <span>Filter</span>
          </button>
        </div>
        <div className='flex items-center space-x-2 mt-4'>
          <input
            type='checkbox'
            checked={val}
            onChange={() => setVal(!val)}
            className='form-checkbox h-5 w-5 text-blue-600'
          />
          <div className='flex flex-row space-x-7'>
            <button className='flex items-center px-8 py-2 bg-white text-black rounded-full border border-black space-x-2'>
              <span>Delete</span>
            </button>
            <button className='flex items-center px-8 py-2 bg-white text-black rounded-full border border-black space-x-2'>
              <span>Mark Read</span>
            </button>
            <button className='flex items-center px-8 py-2 bg-white text-black rounded-full border border-black space-x-2'>
              <span>Mark Unread</span>
            </button>
          </div>
        </div>
        
        <div className='flex mt-8'>
          <div className='w-1/3 p-4 border border-gray-300 h-96 overflow-y-auto'>
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex flex-row space-x-8 p-2 cursor-pointer ${selectedMessage?.id === message.id ? 'bg-gray-200' : ''}`}
                onClick={() => setSelectedMessage(message)}
              >
                <div className='flex flex-col w-full'>
                  <div className='flex items-center space-x-8'>
                    <input
                      type='checkbox'
                      checked={val}
                      onChange={() => setVal(!val)}
                      className='form-checkbox h-5 w-5 text-blue-600'
                    />
                    <img src={Logo} width={60} height={60} className='rounded-full' alt='Sender Logo' />
                    <div className='flex flex-col'>
                      <h2 className='text-lg font-semibold'>{message.sender}</h2>
                      <p className='text-gray-600'>{message.content.substring(0, 30)}...</p>
                    </div>
                  </div>
                  <hr className='my-2 border-gray-300' />
                </div>
              </div>
            ))}
          </div>
          
          <div className='w-2/3 p-4 border border-gray-300 h-96 overflow-y-auto'>
            {selectedMessage ? (
              <>
                <h2 className='text-xl font-bold mb-4'>Sender Information</h2>
                <div className='space-y-4'>
                  <div className='flex items-center space-x-4'>
                    <img src={Logo} width={40} height={40} className='rounded-full' alt='Sender Logo' />
                    <div>
                      <h3 className='text-lg font-semibold'>{selectedMessage.sender}</h3>
                      <p className='text-gray-600'>{selectedMessage.senderEmail}</p>
                    </div>
                  </div>
                  <div className='bg-gray-100 p-4 rounded-lg'>
                    <p className='text-gray-800'>
                      {selectedMessage.content}
                    </p>
                  </div>
                  <div className='text-right'>
                    <span className='text-sm text-gray-500'>Received on: {selectedMessage.receivedDate}</span>
                  </div>
                </div>
              </>
            ) : (
              <p className='text-gray-600'>Select a message to view details</p>
            )}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Message;
