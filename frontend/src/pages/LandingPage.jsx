import React from 'react';

const LandingPage = (loggedin) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-5">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Trackit</h1>
        <p className="text-lg text-gray-600 mb-8">Simplify your financial tracking with ease</p>
      </header>
      
      {/* Features Section */}
      <section className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full mt-8">
        {/* Feature 1: Income Tracking */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-0 md:mr-8">
          <img src="https://www.svgrepo.com/show/522612/money-receive.svg" alt="Income Icon" className="w-24 h-24 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Track Income</h2>
          <p className="text-gray-600 text-center">Effortlessly monitor your income sources and earnings.</p>
        </div>
        
        {/* Feature 2: Expense Tracking */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-0 md:mx-8">
          <img src="https://www.svgrepo.com/show/522614/money-send.svg" alt="Expense Icon" className="w-24 h-24 mb-4" />
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/></svg> */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2 ">Manage Expenses</h2>
          <p className="text-gray-600 text-center">Keep track of your spending and expenses to better manage your finances.</p>
        </div>
        
        {/* Feature 3: Investment Tracking */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-0 md:ml-8">
          <img src="https://www.svgrepo.com/show/497148/graph.svg" alt="Investment Icon" className="w-24 h-24 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Monitor Investments</h2>
          <p className="text-gray-600 text-center">Stay updated on your investment portfolio and performance.</p>
        </div>
        
        {/* Feature 4: Recurring Transactions */}
        <div className="flex flex-col items-center justify-center md:ml-8">
          <img src="https://www.svgrepo.com/show/451232/recurrence.svg" alt="Recurring Icon" className="w-24 h-24 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Automate Recurring Transactions</h2>
          <p className="text-gray-600 text-center">Set up recurring transactions to streamline your financial management process.</p>
        </div>
      </section>
      
      {/* Call-to-Action Section */}
      <section className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to take control of your finances?</h2>
        <p className="text-lg text-gray-600 mb-8">Sign up now and start tracking your income, expenses, investments, and more.</p>
      </section>
    </div>
  );
};

export default LandingPage;