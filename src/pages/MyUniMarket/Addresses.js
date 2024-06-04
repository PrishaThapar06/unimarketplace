import React from 'react';
import Nav from './Nav';

const Addresses = () => {
  return (
    <>
      <Nav />
      <div className="flex m-10 justify-start items-center">
        <h1 className="text-3xl font-bold relative">ADDRESSES</h1>
      </div>
      <div className='flex flex-col space-y-8 m-10'>
        <div className="border-b border-gray-400  flex-grow"></div>
        <div className='flex flex-row items-start space-x-4'>
          <div className='flex flex-col flex-grow'>
            <h1 className="text-2xl font-bold">Registration address, email and phone number</h1>
            <p className="text-gray-700">Your main contact address. It's important to keep it up to date and accurate.</p>
          </div>
          <button className='bg-blue-500 text-white text-3xl border border-blue-500 rounded-full py-2 px-4 self-start'>Edit</button>
        </div>
        <div className="border-b border-gray-400 flex-grow"></div>
        <div className='flex flex-row items-start space-x-4'>
          <div className='flex flex-col flex-grow'>
            <h1 className="text-2xl font-bold">Shipping Address</h1>
            <p className="text-gray-700">Your main shipping address for purchases. This is where you'd like to receive items you purchase.</p>
          </div>
          <button className='bg-blue-500 text-white text-3xl border border-blue-500 rounded-full py-2 px-4 self-start'>Edit</button>
        </div>
        <div className="border-b border-gray-400  flex-grow"></div>
        <div className='flex flex-row items-start space-x-4'>
          <div className='flex flex-col flex-grow'>
            <h1 className="text-2xl font-bold">Ship from address</h1>
            <p className="text-gray-700">Your main address where you ship packages from.</p>
          </div>
          <button className='bg-blue-500 text-white text-3xl border border-blue-500 rounded-full py-2 px-4 self-start'>Edit</button>
        </div>
      </div>
    </>
  );
};

export default Addresses;
