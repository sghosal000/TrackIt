import React, { useRef } from 'react';

const RecurringTransactionForm = () => {
  // Refs for form fields
  const amountRef = useRef(null);
  const typeRef = useRef(null);
  const categoryRef = useRef(null);
  const startDateRef = useRef(null);
  const intervalRef = useRef(null);
  const unitRef = useRef(null);
  const noteRef = useRef(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Get values from refs
    const amount = amountRef.current.value;
    const type = typeRef.current.value;
    const category = categoryRef.current.value;
    const startDate = startDateRef.current.value;
    const interval = intervalRef.current.value;
    const unit = unitRef.current.value;
    const note = noteRef.current.value;
    // Send transaction data to backend or perform validation
    
    // You can handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md ">
      <h3 className="text-lg font-semibold mb-4">Add Recurring Transaction</h3>
      <form className="flex flex-col items-center space-y-4" onSubmit={handleSubmit}>
        {/* Amount */}

          <input
            type="number"
            ref={amountRef}
            className="input-field border border-gray-300 w-full rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            style={{border: '1px solid #ccc'}}
            placeholder="Amount"
            required
          />
        {/* Type */}

          <select
            ref={typeRef}
            className="input-field border border-gray-300 w-full rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            style={{border: '1px solid #ccc'}}
            required
          >
            <option value="">Select Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
            <option value="investment">Investment</option>
          </select>
        {/* Category */}

          <select
            ref={categoryRef}
            className="input-field border border-gray-300 w-full rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            style={{border: '1px solid #ccc'}}
            required
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Cloth">Cloth</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Transportation">Transportation</option>
            <option value="Other">Other</option>
          </select>
        {/* Start Date */}
        
          <input
            type="date"
            ref={startDateRef}
            className="input-field border border-gray-300 w-full rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            style={{border: '1px solid #ccc'}}
          />
        {/* Frequency Interval */}

          <input
            type="number"
            ref={intervalRef}
            className="input-field border border-gray-300 w-full rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            style={{border: '1px solid #ccc'}}
            placeholder='Frequency Interval'
            required
          />
        {/* Frequency Unit */}

          <select
            ref={unitRef}
            className="input-field border border-gray-300 w-full rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            style={{border: '1px solid #ccc'}}
            required
          >
            <option value="">Select Unit</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        {/* Note */}
          <textarea
            ref={noteRef}
            className="input-field border border-gray-300 w-full rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            style={{border: '1px solid #ccc', minHeight: '80px'}}
            placeholder='Note'
          />
        {/* Submit button */}
				<button className="bg-blue-600 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded w-3/4" type="submit">Add</button>
      </form>
    </div>
  );
};

export default RecurringTransactionForm;
