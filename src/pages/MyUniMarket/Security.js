import React from 'react';
import Nav from './Nav';

const data = [
    {
        "id": 1,
        "heading": 'Passkeys',
        "content": "Sign in across all the devices using fingerprint or PIN using the passkey stored in your password manager.",
        "link": "Turn off"
    },
    {
        "id": 2,
        "heading": 'Password',
        "content": "Create a password or modify the existing one.",
        "link": "Edit"
    },
    {
        "id": 3,
        "heading": '2 Step Verification',
        "content": "Protect your account by adding an extra layer of security",
        "link": "Edit"
    },
    {
        "id": 4,
        "heading": 'Devices you trust',
        "content": "Review the devices you've decided to trust.",
        "link": "View"
    },
    {
        "id": 5,
        "heading": 'Sign in activity',
        "content": "View your sign in history.",
        "link": "View"
    },
    {
        "id": 6,
        "heading": 'Social Sign in',
        "content": "Link your social account for faster sign in and checkout.",
        "link": "Edit"
    },
    {
        "id": 7,
        "heading": 'Sign in preferences',
        "content": "Manage your general sign in preferences",
        "link": "Turn off"
    }
];

const Security = () => {
    return (
        <>
            <Nav />
            <div className="container mx-auto mt-10 mb-6">
                <h1 className="text-3xl font-bold mb-8">Sign in and Security</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.map(item => (
                        <div key={item.id} className="border p-4 rounded-lg">
                            <h2 className="text-xl font-bold mb-2">{item.heading}</h2>
                            <p className="text-gray-700 mb-4">{item.content}</p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                {item.link}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Security;
