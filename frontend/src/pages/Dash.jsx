import React, { useState } from 'react';
import Render from './Render';

const Dash = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { name: 'Dashboard', link: '#' },
    { name: 'Income', link: '#' },
    { name: 'Expense', link: '#' },
    { name: 'Investment', link: '#' },
    { name: 'Budget', link: '#' },
    { name: 'Recurring Transactions', link: '#' },
  ];

  return (
    <div>
      <nav className="absolute mt-20 bg-gray-200 left-1/2 transform -translate-x-1/2 w-2/3 rounded-xl shadow-md px-8 z-10">
        <ul className="flex my-auto justify-between mt-4">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className={`pb-3 text-gray-600 font-medium cursor-pointer ${
                activeTab === tab.name.toLowerCase()
                  ? 'font-extrabold text-lg  text-blue-900'
                  : 'hover:text-blue-200'
              }`}
              onClick={() => setActiveTab(tab.name.toLowerCase())}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <Render activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Dash;
