import React from 'react'
import Progressbar from "./Progress_bar";
import BudgetForm from "./BudgetForm"
function BudgetContent() {
  return (
    <div className="row flex">
      <div className='col mt-32 w-1/3'>
        <BudgetForm />
      </div>
      <div className='col mt-32 w-2/3 p-8'>
            <h3 className="heading font-extrabold mb-5">Budget Stats</h3>
        <div className="App p-50">
          <label htmlFor="" className='italic'>Expense</label>
            <Progressbar
                progress={(42/67*100).toFixed(2)}
            />
          <label htmlFor="" className='italic'>Investment</label>
            <Progressbar
                progress="81"
            />
            
        </div>
      </div>
      
    </div>
  )
}

export default BudgetContent