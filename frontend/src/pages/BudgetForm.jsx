import React from 'react'

function BudgeForm(){
    return (
        <div className="flex flex-col items-center bg-zinc p-6 rounded-lg shadow-md bg-gray-100">
        <h3 className="text-lg font-semibold mb-4">Add Budget</h3>
        <form className="flex flex-col items-center space-y-4 form-control">
                <input 
                className='input-field border border-gray-300 w-full rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 mb-2'
                    type="number" 
                    name="amount" 
                    id="" 
                    placeholder='Amount'
                />   
                <select name="type" 
                className='input-field border border-gray-300 w-full rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 mb-2' id="">
                    <option value="">Select Type</option>
                    <option 
                    value="expense">Expense</option>
                    <option 
                    value="investment">Investment</option>
                </select>
                <label htmlFor="">Start Date</label>
                <input 
                    className='input-field border border-gray-300 w-full rounded-md px-3 py-2 focus:outline-none focus:border-blue-500'
                    type="date" 
                    name="startdate" 
                    id="" 
                    placeholder='Start Date'/>
                <label htmlFor="">End Date</label>
                <input 
                    className='input-field border border-gray-300 w-full rounded-md px-3 py-2 focus:outline-none focus:border-blue-500'
                    type="date" 
                    name="enddate" 
                    id="" 
                    placeholder='End Date'/>
				<button className="bg-blue-600 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded w-3/4" type="submit">Add</button>
                </form>
        </div>
    )
}
export default BudgeForm