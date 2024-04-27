import React from 'react';
import TransactionForm from './TransactionForm';

const ExpenseContent = ({investments}) => {
	return (
		<div className="flex justify-center mt-32">
			<div className="w-1/3 pr-4">
				<TransactionForm type={ "investment" }/>
			</div>
			<div className="w-2/3 pl-4">
				<div className="bg-gray-100 p-4  overflow-y-auto">
					<table className="w-full">
						<thead>
							<tr>
								<th className="py-2">Date</th>
								<th className="py-2">Amount</th>
								<th className="py-2">Category</th>
								<th className="py-2">Note</th>
							</tr>
						</thead>
						<tbody>
							{investments && investments.map(investment =>
								<tr key={investment._id}>
									<td className="border-b py-2 text-center">{investment.createdAt.split('T')[0]}</td>
									<td className="border-b py-2 text-center">{investment.amount}</td>
									<td className="border-b py-2 text-center">{investment.categoryid}</td>
									<td className="border-b py-2 text-center">{investment.note}</td>
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
