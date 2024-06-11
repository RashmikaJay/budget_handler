import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props)=>{

    const formSubmitData = (enteredSubmitData)=>{
        const expenseFormData ={
            ...enteredSubmitData,
            id: Math.random().toString()
        }
        console.log(expenseFormData);
        props.onExpenseFormData(expenseFormData)
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveSubmit={formSubmitData}/>
        </div>
    )
}

export default NewExpense;