import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState(0);
    const [enteredDate, setDate] = useState('');

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
        // console.log(e.target.value);
    }

    const amountChangeHandler = (e) => {
        setAmount(e.target.value);
        // console.log(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setDate(e.target.value);
        // console.log(e.target.value);
    }


    const submitHandler = (e) => {
        e.preventDefault();

        const submitData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: +enteredAmount
        }

        props.onSaveSubmit(submitData);

        // console.log(submitData);
        setTitle('');
        setDate('');
        setAmount('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label> Title</label>
                    <input type="text"
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className='new-expense__control'>
                    <label> Amount</label>
                    <input type="number"
                        onChange={amountChangeHandler} min="0.01" step="0.01"
                        value={enteredAmount}
                    />
                </div>
                <div className='new-expense__control'>
                    <label> Date</label>
                    <input type="date"
                        onChange={dateChangeHandler}
                        min="2019-01-01"
                        max="2025-01-01"
                        value={enteredDate} />
                </div>
                <div className='new-expense__actions'>
                    <button className='btn' type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}
export default ExpenseForm;