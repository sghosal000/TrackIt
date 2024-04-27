import React from 'react'
import RecurringTransactionForm from './RecurringTransactionsForm'
function RecurringTransactionsContent() {
  return (
    <>
      <div className="flex justify-center mt-32 ">
      <div className="w-1/3 pr-4">
        <RecurringTransactionForm/>
      </div>
      <div className="w-2/3 pl-4">
  <div className="bg-gray-100 p-4 h-64 overflow-y-auto">
    <table className="w-full">
      <thead>
        <tr>
          <th className="py-2">Date</th>
          <th className="py-2">Amount</th>
          <th className="py-2">Category</th>
          {/* Add more table headings as needed */}
        </tr>
      </thead>
      <tbody>
        {/* Sample rows of past transactions */}
        <tr>
          <td className="border-b py-2 text-center">2024-04-30</td>
          <td className="border-b py-2 text-center">500</td>
          <td className="border-b py-2 text-center">Category 1</td>
          {/* Add more table cells with transaction details */}
        </tr>
        <tr>
          <td className="border-b py-2 text-center">2024-04-29</td>
          <td className="border-b py-2 text-center">300</td>
          <td className="border-b py-2 text-center">Category 2</td>
        </tr>
        {/* Add more rows with past transaction details */}
      </tbody>
    </table>
  </div>
</div>

    </div>
    </>
  )
}

export default RecurringTransactionsContent