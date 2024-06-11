import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear)
    // setFilterYear(e.targ et.value);
    // console.log('Selected year is ' + selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
   return expense.date.getFullYear().toString() === filterYear
  })

  
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;