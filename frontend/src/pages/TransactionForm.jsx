import React, { useRef } from 'react';

const TransactionForm = () => {
  // Refs for form fields
  const amountRef = useRef(null);
  const categoryNameRef = useRef(null);
  const noteRef = useRef(null);
  const typeRef = useRef(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Get values from refs
    const amount = amountRef.current.value;
    const categoryName = categoryNameRef.current.value;
    const note = noteRef.current.value;
    const type = typeRef.current.value;
    // Send transaction data to backend or perform validation
    // You can handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center bg-zinc p-6 rounded-lg shadow-md bg-gray-100">
      <h3 className="text-lg font-semibold mb-4">Add Transaction</h3>
      <form className="flex flex-col items-center space-y-4" onSubmit={handleSubmit}>
        {/* Amount */}
        <label className="text-gray-600">
          Amount:
          <input
            type="number"
            ref={amountRef}
            className="input-field"
            style={{border: '1px solid #ccc'}}
          />
        </label>
        {/* Category Name */}
        <label className="text-gray-600">
          Category Name:
          <input
            type="text"
            ref={categoryNameRef}
            className="input-field"
            style={{border: '1px solid #ccc'}}
          />
        </label>
        {/* Note */}
        <label className="text-gray-600">
          Note:
          <textarea
            ref={noteRef}
            className="input-field"
            style={{border: '1px solid #ccc', minHeight: '80px'}}
          />
        </label>
        {/* Type */}
        <label className="text-gray-600">
          Type:
          <select
            ref={typeRef}
            className="input-field"
            style={{border: '1px solid #ccc'}}
          >
            <option value="">Select Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
            <option value="investment">Investment</option>
          </select>
        </label>
        {/* Submit button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" type="submit">Add</button>
      </form>
    </div>
  );
};

export default TransactionForm;
