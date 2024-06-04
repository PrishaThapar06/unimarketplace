import React from 'react'
import Nav from './Nav'

const Subscriptions = () => {
  return (
    <>
      <Nav />
      <div className="flex m-10 justify-start">
        <h1 className="text-3xl font-bold">SUBSCRIPTIONS</h1>
      </div>
      <div className="border border-gray-900 p-6 m-10 rounded-lg">
        <h1 className='text-2xl font-bold mb-10'>Recommended</h1>
        <div className="flex flex-col md:flex-row md:space-x-4 w-full">
          <div className="flex-1 p-4 ">
            <h1 className='text-2xl font-bold'>UniMarketPlace</h1>
            <p className='text-black mt-10'>You are currently not subscribed to a Store. A store subscription will help you by providing more listings without insertion fees, discounted Final Value Fees, and a set of tools to help promote and grow your sales.</p>
          </div>
          <div className="flex-1 p-4">
            <h2 className='text-2xl font-bold mb-10'>What you'll get when you subscribe to a Store:</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>Save! Free listings and lower Final Value Fees.*</li>
              <li>Boost Traffic! Drive buyers to your listings and Store</li>
              <li>Brand Yourself! Design a custom home page to bring in new and repeated buyers.</li>
              <li>Optimize Listings! Use exclusive, powerful tools to optimize your listings.</li>
              <li>Enjoy dedicated customer service! Have access to smooth and white-glove customer service.</li>
            </ul>
            <p className='mt-5 text-black'>*For more details see <span className='underline'>Seller Center</span></p>
          </div>
          <div className="flex-1 p-4 border-t md:border-t-0 md:border-l border-gray-300 flex flex-col items-center justify-center">
            <button className='bg-blue-600 text-white rounded-full p-3 text-2xl'>Review Store benefits</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Subscriptions
