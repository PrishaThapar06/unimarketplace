import React, { useState } from 'react';
import Summary from './Summary';
import Purchases from './Purchases';
import Nav from './Nav';
import WatchList from './Watchlist';

const MyUniMarket = () => {
    const [activeComponent, setActiveComponent] = useState('Summary');

    const renderComponent = () => {
        switch(activeComponent) {
            case 'Summary':
                return <Summary />;
            case 'Purchases':
                return <Purchases />;
            case 'WatchList':
                return <WatchList />;
            default:
                return <Summary />;
        }
    };

    return (
        <section className='MyUniMarket'>
            <Nav />

            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <div className='flex space-x-4'>
                <aside id="default-sidebar" className="relative top-10 mb-10 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div className="h-full px-3 py-4 overflow-y-auto bg-green-500">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <button onClick={() => setActiveComponent('Summary')} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span className="ms-3">Summary</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveComponent('RecentlyViewed')} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span className="flex-1 ms-3 whitespace-nowrap">Recently Viewed</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveComponent('Inbox')} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">3</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveComponent('BidsOffers')} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span className="flex-1 ms-3 whitespace-nowrap">Bids & offers</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveComponent('Purchases')} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span className="flex-1 ms-3 whitespace-nowrap">Purchases</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveComponent('WatchList')} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span className="flex-1 ms-3 whitespace-nowrap">Watchlist</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveComponent('SavedSearches')} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span className="flex-1 ms-3 whitespace-nowrap">Saved Searches</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveComponent('SavedSellers')} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span className="flex-1 ms-3 whitespace-nowrap">Saved Sellers</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveComponent('MyGarage')} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                    <span className="flex-1 ms-3 whitespace-nowrap">My Garage</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>

                <div>
                    {renderComponent()}
                </div>
            </div>
        </section>
    );
}

export default MyUniMarket;
