import React from 'react'
import Progressbar from "./Progress_bar";
import ExpenseCard from './ExpenseCard';
function DashboardContent({transactions}) {
  return (
    <>
    <div className='mt-32'>

      <div className="row flex">
      <label htmlFor="">Expense</label>
            <Progressbar
                progress={(42/67*100).toFixed(2)}
            />
          <label htmlFor="">Investment</label>
            <Progressbar
                progress="81"
            />
      </div>
      <div className="bg-gray-100 p-4 overflow-y-auto">
					<table className="w-full">
						<thead>
							<tr>
								<th className="py-2">Date</th>
								<th className="py-2">Amount</th>
								<th className="py-2">Category</th>
								<th className="py-2">Note</th>
							</tr>
						</thead>
						<tbody className='bg-blue-200'>
							{transactions && transactions.map(transaction =>
								<tr key={transaction._id}>  
									<td className="border-b py-2 text-center">{transaction.createdAt.split('T')[0]}</td>
									<td className="border-b py-2 text-center">{transaction.amount}</td>
									<td className="border-b py-2 text-center">{transaction.categoryid}</td>
									<td className="border-b py-2 text-center">{transaction.note}</td>
								</tr>
							)}
						</tbody>
					</table>
    </div>
    </div>
    </>
  )
}

export default DashboardContent