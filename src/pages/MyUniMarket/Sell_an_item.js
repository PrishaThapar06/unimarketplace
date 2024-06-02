import React from 'react';
import Nav from './Nav';

const Sell_an_item = () => {
  return (
    <>
    <Nav/>
    <div className="flex flex-col flex-1 p-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-4xl font-bold mb-4 md:mb-0">LIST A PRODUCT</h1>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 md:p-12 space-y-6">
        <form className="max-w-3xl mx-auto space-y-5">
          <div>
            <label htmlFor="name" className="block mb-2 text-md font-medium text-gray-900">Product</label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Name of the product"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block mb-2 text-md font-medium text-gray-900">Category</label>
            <input
              type="text"
              id="category"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Product Category"
              required
            />
          </div>
          <fieldset className="flex space-x-3 mb-5">
            <legend className="sr-only">New or Used</legend>
            <div className="flex items-center">
              <input
                id="option-1"
                type="radio"
                name="new/used"
                value="New"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                defaultChecked
              />
              <label htmlFor="option-1" className="ml-2 text-md font-medium text-gray-900">
                New
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="option-2"
                type="radio"
                name="new/used"
                value="Used"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
              />
              <label htmlFor="option-2" className="ml-2 text-md font-medium text-gray-900">
                Used
              </label>
            </div>
          </fieldset>
          <div>
            <label htmlFor="price" className="block mb-2 text-md font-medium text-gray-900">Price</label>
            <input
              type="text"
              id="price"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Product Price"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-md font-medium text-gray-900">Description</label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe your product..."
            ></textarea>
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900">Your email</label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label htmlFor="website-admin" className="block mb-2 text-md font-medium text-gray-900">Username</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-md text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-md p-2.5"
                placeholder="Bonnie Green"
              />
            </div>
          </div>
          <div>
            <label htmlFor="countries" className="block mb-2 text-md font-medium text-gray-900">Select your country</label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option>Select</option>
              <option>United Kingdom</option>
              {/* <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option> */}
            </select>
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-md font-medium text-gray-900">Your password</label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label htmlFor="repeat-password" className="block mb-2 text-md font-medium text-gray-900">Repeat password</label>
            <input
              type="password"
              id="repeat-password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-md font-medium text-gray-900" htmlFor="user_avatar">Upload file</label>
            <input
              className="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
            />
            <div className="mt-1 text-md text-gray-500" id="user_avatar_help">
              A profile picture is useful to confirm your are logged into your account
            </div>
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-md font-medium text-gray-900">
              I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div></>
  );
};

export default Sell_an_item;
