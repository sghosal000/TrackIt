import React, { useState, useEffect } from 'react';
import DashboardContent from './DashboardContent';
import IncomeContent from './IncomeContent';
import ExpenseContent from './ExpenseContent';
import InvestmentContent from './InvestmentContent'
import BudgetContent from './BudgetContent';
import RecurringTransactionsContent from './RecurringTransactionsContent';

import transactionService from '../apiservice/TransactionService';

const Render = ({ activeTab }) => {
	const [ transactions, setTransactions ] = useState([])
	const [ incomes, setIncomes ] = useState([])
	const [ expenses, setExpenses ] = useState([])
	const [ investments, setInvestments ] = useState([])

	const getTransactions = async () => {
		const allTransactions = await transactionService.getAllTransactions()
		if(allTransactions.status) setTransactions(allTransactions.data.transactions)

	}
	const filterTransactions = async () => {
		const incomes = await transactionService.filterByType(transactions, "income")
		setIncomes(incomes)
		const expenses = await transactionService.filterByType(transactions, "expense")
		setExpenses(expenses)
		const investments = await transactionService.filterByType(transactions, "investment")
		setInvestments(investments)
	}

	useEffect(()=>{
        getTransactions()
    }, [])
	useEffect(()=>{
		filterTransactions()
    }, [transactions])

	const renderContent = () => {
		switch (activeTab) {
			case 'dashboard':
				return <DashboardContent />;
			case 'income':
				return <IncomeContent incomes={incomes}/>;
			case 'expense':
				return <ExpenseContent expenses={expenses}/>;
			case 'investment':
				return <InvestmentContent investments={investments}/>;
			case 'budget':
				return <BudgetContent />;
			case 'recurring transactions':
				return <RecurringTransactionsContent />;
			default:
				return null;
		}
	};

	return (
		<div className="absolute mt-24 w-2/3 left-1/2 transform -translate-x-1/2">
			{renderContent()}
		</div>
	);
};

export default Render;
