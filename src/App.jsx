import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
              <td><button>Add Income</button></td>
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
              <td><button>Add Expense</button></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default App
