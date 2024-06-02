import React from 'react';
import Summary from './Summary';
import Purchases from './Purchases';
import Nav from './Nav'

const MyUniMarket = () => {
    return (
        <section className='MyUniMarket'>        

{/* <nav class="bg-gray-50 mt-10">
    <div class="max-w-screen-xl px-4 py-3">
        <div class="flex">
            <ul class="flex flex-row font-lg font-bold mt-0 space-x-8 rtl:space-x-reverse text-md">
                <li>
                    <a href="#" class="text-gray-900 hover:underline" aria-current="page">Activity</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 hover:underline">Messages</a>
                </li>
                <li>
                    <a href="/myunimarket/account" class="text-gray-900 hover:underline">Account</a>
                </li>
            </ul>
        </div>
    </div>
</nav> */}
<Nav/>

            
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<div  className='flex space-x-4'>

<aside id="default-sidebar" class="relative top-10 mb-10 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-green-500">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">     
               <span class="ms-3">Summary</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
               <span class="flex-1 ms-3 whitespace-nowrap">Recently Viewed</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
               <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">3</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
               <span class="flex-1 ms-3 whitespace-nowrap">Bids & offers</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
               <span class="flex-1 ms-3 whitespace-nowrap">Purchses</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
               <span class="flex-1 ms-3 whitespace-nowrap">Watchlist</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
               <span class="flex-1 ms-3 whitespace-nowrap">Saved Searches</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
               <span class="flex-1 ms-3 whitespace-nowrap">Saved Sellers</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
               <span class="flex-1 ms-3 whitespace-nowrap">My Garage</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

<div>
      <Summary />
      {/* <Purchases /> */}
</div>

</div>
        </section>
    )
}


export default MyUniMarket;