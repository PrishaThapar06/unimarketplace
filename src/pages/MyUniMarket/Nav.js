import React from 'react'
import Purchases from './Purchases';

const Nav = () => {
  return (
    <nav class="bg-gray-50 mt-10">
    <div class="max-w-screen-xl px-4 py-3">
        <div class="flex">
            <ul class="flex flex-row font-lg font-bold mt-0 space-x-8 rtl:space-x-reverse text-md">
                <li>
                    <a href="/myunimarket" class="text-gray-900 hover:underline" aria-current="page">Activity</a>
                </li>
                <li>
                    <a href="/myunimarket/message" class="text-gray-900 hover:underline">Messages</a>
                </li>
                <li>
                    <a href="/myunimarket/account" class="text-gray-900 hover:underline">Account</a>
                </li>
            </ul>
        </div>
    </div>
</nav> 
  )
}

export default Nav