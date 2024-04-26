import React from 'react'
import TransactionForm from './TransactionForm'
function IncomeContent() {
  return (
    <>
      <div className="flex justify-center mt-32">
      <div className="w-1/2 pr-4">
        <TransactionForm />
      </div>
      <div className="w-1/2 pl-4">
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
          <td className="border-b py-2">2024-04-30</td>
          <td className="border-b py-2">$50.00</td>
          <td className="border-b py-2">Category 1</td>
          {/* Add more table cells with transaction details */}
        </tr>
        <tr>
          <td className="border-b py-2">2024-04-29</td>
          <td className="border-b py-2">$30.00</td>
          <td className="border-b py-2">Category 2</td>
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

export default IncomeContent