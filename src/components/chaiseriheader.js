import React, { useState } from 'react';

const ChaiseriHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample data for the dropdown
  const dropdownData = [
    ["Item 2 - Column 1", "Item 2 - Column 2", "Item 2 - Column 3", "Item 2 - Column 4"],
    ["Item 2 - Column 5", "Item 2 - Column 6", "Item 2 - Column 7", "Item 2 - Column 8"],
    ["Item 2 - Column 9", "Item 2 - Column 10", "Item 2 - Column 11", "Item 2 - Column 12"],
    ["Item 2 - Column 13", "Item 2 - Column 14", "Item 2 - Column 15", "Item 2 - Column 16"],
    ["Item 2 - Column 17", "Item 2 - Column 18", "Item 2 - Column 19", "Item 2 - Column 20"],
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src="/your-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        <h1 className="text-white text-lg font-semibold">Your Logo</h1>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="text-white lg:hidden focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation items */}
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:flex lg:space-x-4 text-white`}
      >
        <a href="#" className="block lg:inline">Item 1</a>

        {/* Dropdown for Item 2 */}
        <div className="relative inline-block lg:static text-white">
          <button
            onClick={toggleMenu}
            className="lg:hidden hover:bg-blue-400 focus:outline-none"
          >
            Item 2
          </button>
          {isMenuOpen && (
            <div className="absolute lg:relative lg:block right-0 mt-2 lg:mt-0 w-full lg:w-64 bg-white border border-gray-300 shadow-lg rounded">
              {dropdownData.map((column, columnIndex) => (
                <div key={columnIndex} className="flex">
                  {column.map((item, itemIndex) => (
                    <div key={itemIndex} className="w-1/4 p-2 border-r border-b border-gray-300">
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        <a href="#" className="block lg:inline">Item 3</a>
        <a href="#" className="block lg:inline">Item 4</a>
        <a href="#" className="block lg:inline">Item 5</a>
      </nav>
    </header>
  );
};

export default ChaiseriHeader;
