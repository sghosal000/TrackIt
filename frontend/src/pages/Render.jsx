import React from 'react';
import DashboardContent from './DashboardContent';
import IncomeContent from './IncomeContent';
import ExpenseContent from './ExpenseContent';
import BudgetContent from './BudgetContent';
import RecurringTransactionsContent from './RecurringTransactionsContent';

const Render = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'income':
        return <IncomeContent />;
      case 'expense':
        return <ExpenseContent />;
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
