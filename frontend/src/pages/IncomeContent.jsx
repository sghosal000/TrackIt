import React from 'react'
import TransactionForm from './TransactionForm'

function IncomeContent({ incomes }) {
	return (
		<div className="flex justify-center mt-32">
			<div className="w-1/2 pr-4">
				<TransactionForm type={ "income" }/>
			</div>
			<div className="w-1/2 pl-4">
				<div className="bg-gray-100 p-4 h-64 overflow-y-auto">
					<table className="w-full">
						<thead>
							<tr>
								<th className="py-2">Date</th>
								<th className="py-2">Amount</th>
								<th className="py-2">Category</th>
								<th className="py-2">Note</th>
							</tr>
						</thead>
						<tbody className='bg-green-100'>
							{incomes && incomes.map(income =>
								<tr key={income._id}>
									<td className="border-b py-2">{income.createdAt.split('T')[0]}</td>
									<td className="border-b py-2">{income.amount}</td>
									<td className="border-b py-2">{income.categoryid}</td>
									<td className="border-b py-2">{income.note}</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>

		</div>
	)
}

export default IncomeContent