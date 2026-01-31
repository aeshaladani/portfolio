import React from 'react';
import { Search } from 'lucide-react';

const Header = ({ searchQuery, setSearchQuery, onSearch }) => {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-8 flex-1">
          <div className="text-3xl font-light">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </div>
          
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && onSearch()}
                className="w-full px-12 py-3 border border-gray-300 rounded-full hover:shadow-md focus:shadow-md focus:outline-none transition-shadow"
                placeholder="Search..."
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <button 
                onClick={onSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <Search className="w-5 h-5 text-blue-500" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            {/* <div className="w-6 h-6 bg-gray-300 rounded-full"></div> */}
          </button>
          <div className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
            A
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;