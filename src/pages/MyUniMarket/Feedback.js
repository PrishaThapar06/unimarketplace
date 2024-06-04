import React, { useState } from 'react';
import Nav from './Nav';
import avatar from '../../assets/images/avatar.jpg';
import { CiCircleInfo } from "react-icons/ci";

const data = [
  {
    category: 'Positive',
    '1 month': 0,
    '6 months': 0,
    '12 months': 0,
  },
  {
    category: 'Neutral',
    '1 month': 0,
    '6 months': 0,
    '12 months': 0,
  },
  {
    category: 'Negative',
    '1 month': 'D',
    '6 months': 0,
    '12 months': 0,
  },
];

const Feedback = () => {
    const [visibleToEveryone, setVisibleToEveryone] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null);
    const [visible,setvisible] = useState(true);
    const [visi,setVisi] = useState(true);

    const toggleVisibility = () => {
        setVisibleToEveryone(!visibleToEveryone);
    };

    const handleClick = (option) => {
        setSelectedOption(option);
    };

    const visibility = ()=>{
        setvisible(!visible)

    }

    const togglevisi = () =>{
        setVisi(!visi)
    }

    const renderContent = () => {
        switch (selectedOption) {
            case 'All received Feedback':
                return (
                    <div className="flex flex-col">
                        <div className='flex flex-row justify-between'>
                            <p className='text-black'>0 feedback received</p>
                            <div className='flex flex-row space-x-5 justify-center items-center'>
                                <p className='text-black'>Feedback revision request received: 5</p>
                                <CiCircleInfo/>
                            </div>
                        </div>
                        <div className="flex justify-end items-center mt-3">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-blue-500"
                                checked={visible}
                                onChange={visibility}
                            />
                            <span className="ml-2 text-black">Show only feedback with photos</span>
                        </div>
                        <div className='flex flex-row justify-between mt-6 space-y-4 sm:space-y-0 sm:flex'>
                            <div className="flex flex-col space-y-4">
                                <div className="flex flex-row space-x-5 justify-start items-center text-black">
                                    <p className='text-black'>Send feedback received with an item title, item ID or User ID</p>
                                    <CiCircleInfo />
                                </div>
                                <div className="flex flex-row space-x-3">
                                    <input
                                        type="text"
                                        className="border border-gray-300 rounded p-2"
                                        placeholder="e.g Costers a pack of 6"
                                    />
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                        Search
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-row space-x-5'>
                                <div className="flex flex-col space-y-4">
                                    <h1>Period</h1>
                                    <select className="border border-gray-300 rounded p-2 w-full">
                                        <option value="option1">All</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <h1>Sort By:</h1>
                                    <select className="border border-gray-300 rounded p-2 w-full">
                                        <option value="option1">Most Recent</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Received as buyer':
                return (
                    <div className="flex flex-row justify-between">
                        <div className='flex flex-row justify-between'>
                            <p className='text-black'>0 feedback received</p>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h1>Period</h1>
                            <select className="border border-gray-300 rounded p-2 w-full">
                                <option value="option1">All</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                    </div>
                );
            case 'Received as seller':
                return (
                    <div className="flex flex-col">
                        <div className='flex flex-row justify-between'>
                            <p className='text-black'>0 feedback received</p>
                            <div className='flex flex-row space-x-5 justify-center items-center'>
                                <p className='text-black'>Feedback revision request received: 5</p>
                                <CiCircleInfo/>
                            </div>
                        </div>
                        <div className="flex justify-end items-center mt-3">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-blue-500"
                                checked={visi}
                                onChange={togglevisi}
                            />
                            <span className="ml-2 text-black">Show only feedback with photos</span>
                        </div>
                        <div className='flex flex-row justify-between mt-6 space-y-4 sm:space-y-0 sm:flex'>
                            <div className="flex flex-col space-y-4">
                                <div className="flex flex-row space-x-5 justify-start items-center text-black">
                                    <p className='text-black'>Send feedback received with an item title, item ID or User ID</p>
                                    <CiCircleInfo />
                                </div>
                                <div className="flex flex-row space-x-3">
                                    <input
                                        type="text"
                                        className="border border-gray-300 rounded p-2"
                                        placeholder="e.g Costers a pack of 6"
                                    />
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                        Search
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-row space-x-5'>
                                <div className="flex flex-col space-y-4">
                                    <h1>Period</h1>
                                    <select className="border border-gray-300 rounded p-2 w-full">
                                        <option value="option1">All</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <h1>Sort By:</h1>
                                    <select className="border border-gray-300 rounded p-2 w-full">
                                        <option value="option1">Most Recent</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Left for others':
                return (
                    <div className="flex flex-col">
                        <div className='flex flex-row justify-between'>
                            <p className='text-black'>0 feedback received</p>
                        </div>
                        <div className='flex flex-row justify-between mt-6'>
                            <div className="flex flex-col space-y-4">
                                <div className="flex flex-row space-x-5 justify-start items-center text-black">
                                    <p className='text-black'>Send feedback received with an item title, item ID or User ID</p>
                                    <CiCircleInfo />
                                </div>
                                <div className="flex flex-row space-x-3">
                                    <input
                                        type="text"
                                        className="border border-gray-300 rounded p-2"
                                        placeholder="e.g Costers a pack of 6"
                                    />
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };
    

    return (
        <>
            <Nav />
            <div className="flex m-10 justify-start items-center">
                <h1 className="text-3xl font-bold relative">FEEDBACK PROFILE</h1>
            </div>

            <div className="flex flex-col items-center m-10">
    <div className="flex flex-col sm:flex-row w-full justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-full sm:w-2/3 p-4 border border-gray-600 rounded-2xl">
            <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6'>
                <img src={avatar} className="w-32 h-32 rounded-full " alt="Avatar" />
                <div className='flex flex-col space-y-2 items-start'>
                    <div className="flex items-center space-x-2">
                        <h1 className="text-2xl font-bold">John Smith@1</h1>
                        <CiCircleInfo />
                    </div>
                    <p className="text-2xl">Member since May-21-22 in London, UK</p>
                </div>
            </div>
        </div>
        <div className="w-full sm:w-1/3 p-4 pr-2 border border-gray-600 rounded-2xl space-y-2 sm:mt-0">
            <h1 className='text-2xl font-bold'>Member Quick Links</h1>
            <ul className="text-2xl">
                <li className='text-blue-700 cursor-pointer'>Contact member</li>
                <li className='text-blue-700 cursor-pointer'>Report a buyer</li>
                <li className='text-blue-700 cursor-pointer'>View seller dashboard</li>
                <li className='text-blue-700 cursor-pointer'>View items for sale</li>
            </ul>
        </div>
    </div>


    <div className="w-full flex flex-col items-center mt-10 space-y-4">
    <div className="w-full flex justify-center space-x-4">
        <div className="w-full sm:w-1/2 mb-4">
            <div className='flex items-center space-x-2'>
                <h1 className='text-xl font-bold'>Feedback Ratings</h1>
                <CiCircleInfo />
            </div>
        </div>
        <div className="w-full sm:w-1/2 mb-4">
            <div className='flex items-center space-x-2'>
                <h1 className='text-xl font-bold'>Detailed Seller Ratings</h1>
                <CiCircleInfo />
            </div>
        </div>
    </div>

    <div className="w-full flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        
        <div className="w-full sm:w-1/3 p-4 border border-gray-600 rounded-2xl">
            
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 border border-gray-300"></th>
                        <th className="py-2 px-4 border border-gray-300">1 month</th>
                        <th className="py-2 px-4 border border-gray-300">6 months</th>
                        <th className="py-2 px-4 border border-gray-300">12 months</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.category} className="border-b border-gray-300">
                            <td className="py-2 px-4">{item.category}</td>
                            <td className="py-2 px-4">{item['1 month']}</td>
                            <td className="py-2 px-4">{item['6 months']}</td>
                            <td className="py-2 px-4">{item['12 months']}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="w-full sm:w-2/3 p-4 border border-gray-600 rounded-2xl">
            <h1 className="text-xl font-bold mb-4">Average for the last 12 months</h1>
            <div className="border-b border-gray-600 w-full"></div>
            <div className="flex justify-center items-center mt-10">
                This information would be available when there will be at least 10 detailed seller ratings
            </div>
        </div>
    </div>
</div>
</div>

<div className="flex flex-col sm:flex-row justify-between">
    <div className="flex flex-wrap gap-5 m-10">
        <ul className="flex">
            <li
                className={`hover:underline hover:font-bold py-2 px-4 rounded-md cursor-pointer ${selectedOption === 'All received Feedback' ? 'text-blue-700 underline' : 'text-black'}`}
                onClick={() => handleClick('All received Feedback')}
            >
                All received Feedback
            </li>
            <li
                className={`hover:underline hover:font-bold px-4 py-2 rounded-md cursor-pointer ${selectedOption === 'Received as buyer' ? 'text-blue-700 underline' : 'text-black'}`}
                onClick={() => handleClick('Received as buyer')}
            >
                Received as buyer
            </li>
            <li
                className={`hover:underline hover:font-bold px-4 py-2 rounded-md cursor-pointer ${selectedOption === 'Received as seller' ? 'text-blue-700 underline' : 'text-black'}`}
                onClick={() => handleClick('Received as seller')}
            >
                Received as seller
            </li>
            <li
                className={`hover:underline hover:font-bold px-4 py-2 rounded-md cursor-pointer ${selectedOption === 'Left for others' ? 'text-blue-700 underline' : 'text-black'}`}
                onClick={() => handleClick('Left for others')}
            >
                Left for others
            </li>
        </ul>
    </div>
    <div className="flex flex-wrap gap-5 m-10">
        <div className="flex items-center">
            <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
                checked={visibleToEveryone}
                onChange={toggleVisibility}
            />
            <span className="ml-2">Visible to everyone</span>
        </div>
    </div>
</div>


            {/* Render selected content */}
            <div className="m-10">
                {renderContent()}
            </div>
            <div className='flex m-10 overflow-x-auto'>
    <table className="w-full min-w-max bg-white rounded-lg overflow-hidden">
        <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-2xl leading-normal">
                <th className="py-3 px-6 text-left">Feedback</th>
                <th className="py-3 px-6 text-left">From</th>
                <th className="py-3 px-6 text-left">When</th>
            </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
            <tr className="border-b border-gray-200 ">
                <td className="py-3 px-6 text-left whitespace-nowrap text-xl text-black font-bold">
                    This member hasn't received any feedback
                </td>
                <td className="py-3 px-6 text-left"></td>
                <td className="py-3 px-6 text-left"></td>
            </tr>
        </tbody>
    </table>
</div>

        </>
    );
};

export default Feedback;
