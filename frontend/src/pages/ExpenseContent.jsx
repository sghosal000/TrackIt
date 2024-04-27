import React from 'react';
import TransactionForm from './TransactionForm';

const ExpenseContent = ({expenses}) => {
	return (
		<div className="flex justify-center mt-32">
			<div className="w-1/3 pr-4">
				<TransactionForm type={ "expense" }/>
			</div>
			<div className="w-2/3 pl-4">
				<div className="bg-gray-100 p-4 h-128 overflow-y-auto">
					<table className="w-full">
						<thead>
							<tr>
								<th className="py-2">Date</th>
								<th className="py-2">Amount</th>
								<th className="py-2">Category</th>
								<th className="py-2">Note</th>
							</tr>
						</thead>
						<tbody className='bg-red-100'>
							{expenses && expenses.map(expense =>
								<tr key={expense._id}>
									<td className="border-b py-2 text-center">{expense.createdAt.split('T')[0]}</td>
									<td className="border-b py-2 text-center">{expense.amount}</td>
									<td className="border-b py-2 text-center">{expense.categoryid}</td>
									<td className="border-b py-2 text-center">{expense.note}</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>

		</div>
	);
};

export default ExpenseContent;
