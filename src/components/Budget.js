import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        const newBudget = event.target.value
        const spendings = expenses.reduce((total, expense) => total + expense.cost,0);
        if(newBudget > 20000){
            alert("Budget cannot be more than 20000");
        }else if(newBudget < spendings){
            alert("You cannot reduce the budget value lower than the spending {spendings}")
        }else{
            dispatch({type: "SET_BUDGET", payload: newBudget});
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;