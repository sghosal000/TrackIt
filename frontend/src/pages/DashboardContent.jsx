import React from 'react'
import Progressbar from "./Progress_bar";
import ExpenseCard from './ExpenseCard';
function DashboardContent(transactions) {
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
    </div>
    </>
  )
}

export default DashboardContent