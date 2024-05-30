import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, expense) =>{
        return total+=expense.cost;
    },0);
    const updateBudget = (newBudget) => {
        if(newBudget < totalExpenses) {
            alert("You cannot change the budget to be lower than spending");
        }
        else {
            dispatch({type:'SET_BUDGET', payload: newBudget});
        }

    };
    return (
        <div className='alert alert-secondary'>
            Budget: {currency}<input type="number" 
            max="20000" step="10" value={budget}
            onChange={(e)=>{updateBudget(e.target.value)}}></input>
        </div>
    )
};

export default Budget;