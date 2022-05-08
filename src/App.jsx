import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  // TODO: update state to handle input chages
  const [count, setCount] = useState(0)

  // TODO: update income routing to use POST method instead of GET
  //       will also need GET routing to update all incomes from DB
  const sendIncomeToDB = () => {
    console.log(`sending income to DB`);
    axios({
      method: 'get',
      url: 'http://localhost:3001/api/add/income'
    })
    .then(res => {
      console.log(`response: ${res.data}`);
    })
    .catch(err => {
      console.log(`error: ${err}`);
    })
  }

// TODO: update expense routing to use POST method instead of GET
//       will also need GET routing to update all expenses from DB
  const sendExpenseToDB = () => {
    console.log(`sending expense to DB`);
    axios({
      method: 'get',
      url: 'http://localhost:3001/api/add/expense'
    })
    .then(res => {
      console.log(`response: ${res.data}`);
    })
    .catch(err => {
      console.log(`error: ${err}`);
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
              <td><input placeholder='ie: Salary'></input></td>
              <td><input placeholder='ie: $1000.00'></input></td>
              <td><input placeholder='ie: DD/MM/YY'></input></td>
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
              <td><input placeholder='ie: Groceries'></input></td>
              <td><input placeholder='ie: $123.45'></input></td>
              <td><input placeholder='ie: DD/MM/YY'></input></td>
              <td><button onClick={ (event) => sendExpenseToDB(event)}>Add Expense</button></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default App
