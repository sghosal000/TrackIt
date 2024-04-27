import React from 'react'
import Progressbar from "./Progress_bar";

function BudgetContent() {
  return (
    <div class="row flex">
      <div className='col mt-32 w-1/2'>
        budget
      </div>
      <div className='col mt-32 w-1/2'>
      <div className="App">
            <h3 className="heading">Progress Bar</h3>
            <Progressbar
                progress="30"
                height={30}
            />
            <Progressbar
                progress="81"
                height={30}
            />
            
        </div>
      </div>
      
    </div>
  )
}

export default BudgetContent