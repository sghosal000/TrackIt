import React, { useState, useRef, useEffect } from 'react';
import transactionService from '../apiservice/TransactionService';


const TransactionForm = ({ type }) => {
	const amountRef = useRef(null);
	const categoryNameRef = useRef(null);
	const noteRef = useRef(null);

	const [message, setMessage] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()

		const newTransaction = {
			amount: amountRef.current.value,
			categoryName: categoryNameRef.current.value,
			note: noteRef.current.value,
			type: type,
		}
		
		console.log(newTransaction)
		const res = await transactionService.addTransaction(newTransaction)
		
		if (res.status){
			setMessage("Transaction added")
			amountRef.current.value = ""
			categoryNameRef.current.value = ""
			noteRef.current.value = ""
		}
		else{
			setMessage("Error.. try again")
		}
		useEffect(()=>{
			getTransactions()
		}, [])
	}

	return (
		<div className="flex flex-col items-center bg-zinc p-6 rounded-lg shadow-md bg-gray-100">
			<h3 className="text-lg font-semibold mb-4">Add Transaction</h3>
			<p>{message}</p>
			<form className="flex flex-col items-center space-y-4 form-control" onSubmit={handleSubmit}>
				<label className="text-gray-600">
					Amount:
					<input
						type="number"
						ref={amountRef}
						className="input-field"
						style={{ border: '1px solid #ccc' }}
					/>
				</label>
				<label className="text-gray-600">
					Category Name:
					<input
						type="text"
						ref={categoryNameRef}
						className="input-field"
						style={{ border: '1px solid #ccc' }}
					/>
				</label>
				<label className="text-gray-600">
					Note:
					<textarea
						ref={noteRef}
						className="input-field"
						style={{ border: '1px solid #ccc', minHeight: '80px' }}
					/>
				</label>
				<button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" type="submit">Add</button>
			</form>
		</div>
	);
};

export default TransactionForm;
