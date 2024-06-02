import React, { useState } from 'react';
import avatarImage from '../../assets/images/avatar.jpg';
import Nav from './Nav';

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [avatar, setAvatar] = useState(avatarImage);

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleAvatarClick = () => {
    document.getElementById('avatarInput').click();
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderContent = () => {
    if (isEditMode) {
      return (
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="firstName" className="text-lg font-bold">First Name</label>
            <input type="text" id="firstName" name="firstName" className="border border-gray-300 rounded-lg p-2" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="lastName" className="text-lg font-bold">Last Name</label>
            <input type="text" id="lastName" name="lastName" className="border border-gray-300 rounded-lg p-2" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-lg font-bold">Email</label>
            <input type="email" id="email" name="email" className="border border-gray-300 rounded-lg p-2" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="contactNumber" className="text-lg font-bold">Contact Number</label>
            <input type="text" id="contactNumber" name="contactNumber" className="border border-gray-300 rounded-lg p-2" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="city" className="text-lg font-bold">City</label>
            <input type="text" id="city" name="city" className="border border-gray-300 rounded-lg p-2" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="country" className="text-lg font-bold">Country</label>
            <input type="text" id="country" name="country" className="border border-gray-300 rounded-lg p-2" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-lg font-bold">Password</label>
            <input type="password" id="password" name="password" className="border border-gray-300 rounded-lg p-2" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-bold">First Name</label>
            <div className="border border-gray-300 rounded-lg p-2">John</div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-bold">Last Name</label>
            <div className="border border-gray-300 rounded-lg p-2">Smith</div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-bold">Email</label>
            <div className="border border-gray-300 rounded-lg p-2">johns342@gmail.com</div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-bold">Contact Number</label>
            <div className="border border-gray-300 rounded-lg p-2">+44 20 1234 5678</div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-bold">City</label>
            <div className="border border-gray-300 rounded-lg p-2">London</div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-bold">Country</label>
            <div className="border border-gray-300 rounded-lg p-2">UK</div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-bold">Password</label>
            <div className="border border-gray-300 rounded-lg p-2">******</div>
          </div>
        </div>
      );
    }
  };

  return (
    <><Nav/>
    <div className="flex flex-col flex-1 p-8 bg-gray-50 min-h-screen mb-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-4xl font-bold mb-4 md:mb-0">PERSONAL INFORMATION</h1>
        <div className="relative cursor-pointer" onClick={handleAvatarClick}>
          <img src={avatar} alt="Avatar" className="w-20 h-20 rounded-full md:mr-8" />
          <input
            type="file"
            id="avatarInput"
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 md:p-12 space-y-6">
        {renderContent()}
        <div className="flex justify-end">
          <button 
            onClick={handleEditClick} 
            className="text-2xl font-bold px-6 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-200"
          >
            {isEditMode ? 'Cancel' : 'Edit'}
          </button>
        </div>
      </div>
    </div></>
  );
};

export default Profile;
