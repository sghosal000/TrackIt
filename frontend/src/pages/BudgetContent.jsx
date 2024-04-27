import React from 'react'
import Progressbar from "./Progress_bar";

function BudgetContent() {
  return (
    <div class="row flex">
      <div className='col mt-32 w-1/2'>
      <h2 className="text-center font-bold">Budget Form</h2>
        
      </div>
      <div className='col mt-32 w-1/2'>
            <h3 className="heading font-bold">Budget Stats</h3>
      <div className="App">
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
      
    </div>
  )
}

export default BudgetContent