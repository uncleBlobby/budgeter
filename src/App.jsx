import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  // TODO: update state to handle input chages
  const [count, setCount] = useState(0)

  const [newIncome, setNewIncome] = useState({
    source: '',
    amount: '',
    date: ''
  })

  const [newExpense, setNewExpense] = useState({
    type: '',
    amount: '',
    date: ''
  })

  // TODO: need GET routing to update all incomes from DB
  const sendIncomeToDB = () => {
    console.log(`sending income to DB`);
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/add/income',
      data: newIncome
    })
    .then(res => {
      console.log(`response: ${res.data}`);
    })
    .catch(err => {
      console.log(`error: ${err}`);
    })
  }

  // TODO: GET routing to update all incomes from DB
  // currently unused.
  const getIncomesFromDB = () => {
    console.log(`getting incomes from DB`);
    axios({
      method: 'get',
      url: 'http://localhost:3001/api/get/income'
    })
    .then(res => {
      console.log(`response: ${res.data}`);
    })
    .catch(err => {
      console.log(`error: ${err}`);
    })
  }

  const sendExpenseToDB = () => {
    console.log(`sending expense to DB`);
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/add/expense',
      data: newExpense
    })
    .then(res => {
      console.log(`response: ${res.data}`);
    })
    .catch(err => {
      console.log(`error: ${err}`);
    })
  }

  // TODO: GET routing to update all expenses from DB
  // currently unused.
  const getExpensesFromDB = () => {
    console.log(`getting expenses from DB`);
    axios({
      method: 'get',
      url: 'http://localhost:3001/api/get/expense'
    })
    .then(res => {
      console.log(`response: ${res.data}`);
    })
    .catch(err => {
      console.log(`error: ${err}`);
    })
  }

  const handleIncomeChange = (e) => {
    setNewIncome({
      ...newIncome,
      [e.target.name]: e.target.value
    })
  }
  const handleExpenseChange = (e) => {
    setNewExpense({
      ...newExpense,
      [e.target.name]: e.target.value
    })
  }

  // TODO: Breakout app chunks into separate components.
  return (
    <div className="App">
      Budgeter
      <div id='tableContainer'>
        <table id='incomeTable'>
          <thead>
            <tr>
              <th>Income</th>
            </tr>
            <tr>
              <th>Source</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input name='source' placeholder='ie: Salary' onChange={ (e) => handleIncomeChange(e)}></input></td>
              <td><input name='amount' placeholder='ie: $1000.00' onChange={ (e) => handleIncomeChange(e)}></input></td>
              <td><input name='date' placeholder='ie: DD/MM/YY' onChange={ (e) => handleIncomeChange(e)}></input></td>
              <td><button onClick={ (event) => sendIncomeToDB(event)}>Add Income</button></td>
            </tr>
          </tbody>
        </table>
        <table id='expenseTable'>
          <thead>
            <tr>
              <th>Expense</th>
            </tr>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input name='type' placeholder='ie: Groceries' onChange={ (e) => handleExpenseChange(e)}></input></td>
              <td><input name='amount' placeholder='ie: $123.45' onChange={ (e) => handleExpenseChange(e)}></input></td>
              <td><input name='date' placeholder='ie: DD/MM/YY' onChange={ (e) => handleExpenseChange(e)}></input></td>
              <td><button onClick={ (event) => sendExpenseToDB(event)}>Add Expense</button></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default App
