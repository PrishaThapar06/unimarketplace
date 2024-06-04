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

    const toggleVisibility = () => {
        setVisibleToEveryone(!visibleToEveryone);
    };

    const handleClick = (option) => {
        setSelectedOption(option);
    };

    const renderContent = () => {
        switch (selectedOption) {
            case 'All received Feedback':
                return (
                    <div>
                        {/* Add your content for 'All received Feedback' here */}
                        <p>Display content for 'All received Feedback'</p>
                    </div>
                );
            case 'Received as buyer':
                return (
                    <div>
                        {/* Add your content for 'Received as buyer' here */}
                        <p>Display content for 'Received as buyer'</p>
                    </div>
                );
            case 'Received as seller':
                return (
                    <div>
                        {/* Add your content for 'Received as seller' here */}
                        <p>Display content for 'Received as seller'</p>
                    </div>
                );
            case 'Left for others':
                return (
                    <div>
                        {/* Add your content for 'Left for others' here */}
                        <p>Display content for 'Left for others'</p>
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
                <div className="flex w-full justify-center space-x-4">
                    <div className="w-2/3 p-4 border border-gray-600 rounded-2xl">
                        <div className='flex flex-row space-x-6'>
                            <img src={avatar} width={200} height={200} alt="Avatar" />
                            <div className='flex flex-col space-y-4 justify-center items-start'>
                                <div className="flex items-center space-x-2">
                                    <h1>John Smith@1</h1>
                                    <CiCircleInfo />
                                </div>
                                <p>Member since May-21-22 in London, UK</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 p-4 pr-2 border border-gray-600 rounded-2xl space-y-2">
                        <h1 className='text-2xl font-bold'>Member Quick Links</h1>
                        <ul>
                            <li className='text-blue-700 cursor-pointer'>Contact member</li>
                            <li className='text-blue-700 cursor-pointer'>Report a buyer</li>
                            <li className='text-blue-700 cursor-pointer'>View seller dashboard</li>
                            <li className='text-blue-700 cursor-pointer'>View items for sale</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full flex justify-center mt-10 space-x-4">
                    <div className="w-1/3 mb-4">
                        <div className='flex items-center space-x-2'>
                            <h1 className='text-xl font-bold'>Feedback Ratings</h1>
                            <CiCircleInfo />
                        </div>
                    </div>
                    <div className="w-2/3 mb-4">
                        <div className='flex items-center space-x-2'>
                            <h1 className='text-xl font-bold'>Detailed Seller Ratings</h1>
                            <CiCircleInfo />
                        </div>
                    </div>
                </div>

                <div className="flex w-full justify-center space-x-4">
                    <div className="w-1/3 p-4 border border-gray-600 rounded-2xl">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="py-2 px-4 border border-gray-300">   </th>
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
                    <div className="w-2/3 p-4 border border-gray-600 rounded-2xl">
                        <h1 className="text-xl font-bold mb-4">Average for the last 12 months</h1>
                        <div className="border-b border-gray-600 w-full"></div>
                        <div className="flex justify-center items-center mt-10">
                            This information would be available when there will be at least 10 detailed seller ratings
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="flex flex-wrap gap-5 m-10">
                    <ul className="flex">
                        <li
                            className="hover:underline hover:font-bold px-4 py-2 rounded-md cursor-pointer"
                            onClick={() => handleClick('All received Feedback')}
                        >
                            All received Feedback
                        </li>
                        <li
                            className="hover:underline hover:font-bold px-4 py-2 rounded-md cursor-pointer"
                            onClick={() => handleClick('Received as buyer')}
                        >
                            Received as buyer
                        </li>
                        <li
                            className="hover:underline hover:font-bold px-4 py-2 rounded-md cursor-pointer"
                            onClick={() => handleClick('Received as seller')}
                        >
                            Received as seller
                        </li>
                        <li
                            className="hover:underline hover:font-bold px-4 py-2 rounded-md cursor-pointer"
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
            <div className='flex m-10'>
            <table className="w-full">
                            <thead>
                                <tr className="">
                                    <th className="py-2 px-4 border border-gray-300">FEEDBACK</th>
                                    <th className="py-2 px-4 border border-gray-300">FROM</th>
                                    <th className="py-2 px-4 border border-gray-300">WHEN</th>
                                </tr>
                                
                                    <div className='flex justify-center items-center mt-6'>
                                        This member hasn't received any feedback
                                    </div>
                                
                            </thead></table>
            </div>
        </>
    );
};

export default Feedback;
