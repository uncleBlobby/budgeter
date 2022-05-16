import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

import TransactionList from './components/TransactionList';

function App() {
  const [haveLatestData, setHaveLatestData] = useState(false)

  const [latestData, setLatestData] = useState([])

  const [newIncome, setNewIncome] = useState({
    class: 'income',  // income
    type: '',         // salary, etc
    amount: '',       // amount of transaction ie: $1000.00
    date: '',         // date of transaction ie: YYYY-MM-DD
    created: '',      // date and time of transaction added to DB (generated on backend)
    modified: '',     // date and time of transaction last modified (generated on backend)
    description: ''   // description of transaction (currently not in use)
  })

  const [newExpense, setNewExpense] = useState({
    class: 'expense', // expense
    type: '',         // rent, groceries, etc
    amount: '',       // amount of transaction ie: $1000.00
    date: '',         // date of transaction ie: YYYY-MM-DD
    created: '',      // date and time of transaction added to DB (generated on backend)
    modified: '',     // date and time of transaction last modified (generated on backend)
    description: ''   // description of transaction (currently not in use)
  })
  
  /*
   * TODO: replace all calls for income and expense state with transaction state
   *
  const [newTransaction, setNewTransaction] = useState({
    class: '',        // income or expense
    type: '',         // salary, rent, groceries, etc
    amount: '',       // amount of transaction ie: $1000.00
    date: '',         // date of transaction ie: YYYY-MM-DD
    created: '',      // date and time of transaction added to DB (generated on backend)
    modified: '',     // date and time of transaction last modified (generated on backend)
    description: ''   // description of transaction (currently not in use)
  })
  */

  // calculate and return total expenses / total incomes for all transactions:

  const getTotalIncome = () => {
    let total = 0;
    latestData.forEach(txn => {
      if (txn.class === 'income') {
        total += Number(txn.amount);
      }
    })
    return total
  }

  const getTotalExpense = () => {
    let total = 0;
    latestData.forEach(txn => {
      if (txn.class === 'expense') {
        total += Number(txn.amount);
      }
    })
    return total
  }

  const getTotalSmokes = () => {
    let total = 0;
    latestData.forEach(txn => {
      if (txn.type.toLowerCase() === 'smokes') {
        total += Number(txn.amount);
      }
    })
    return total;
  }

  const getTotalBeerAlcohol = () => {
    let total = 0;
    latestData.forEach(txn => {
      const type = txn.type.toLowerCase();
      if (type.includes('beer') || type.includes('alcohol')) {
        total += Number(txn.amount);
      }
    })
    return total;
  }
  
  // sends new income object from frontend inputs to backend API
  const sendIncomeToDB = () => {
    console.log(`sending income to DB`);
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/add/income',
      data: newIncome
    })
    .then(res => {
      console.log(`response: ${res.data}`);
      setHaveLatestData(false);
    })
    .catch(err => {
      console.log(`error: ${err}`);
    })
  }

  // sends new expense object from frontend inputs to backend API
  const sendExpenseToDB = () => {
    console.log(`sending expense to DB`);
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/add/expense',
      data: newExpense
    })
    .then(res => {
      console.log(`response: ${res.data}`);
      setHaveLatestData(false);
    })
    .catch(err => {
      console.log(`error: ${err}`);
    })
  }

  const getDataFromDB = () => {
    console.log(`getting all transactions from DB`);
    axios({
      method: 'get',
      url: 'http://localhost:3001/api/get/transactions'
    })
    .then(res => {
      //console.log(`response: ${JSON.stringify(res.data)}`);
      setLatestData(res.data);
      //console.log(`latestData: ${latestData}`);
    })
    .catch(err => {
      console.log(`error: ${err}`);
    })
  }

  // TODO: add some input validation to frontend -- only update state if input is valid
  // TODO: make input box outline in red if the input is invalid, for example if the date format is incorrect
  // TODO: invalid inputs could be animated on attempted submission to show user there is a problem (ie: shake the input box)
  
  const handleIncomeChange = (e) => {
    setNewIncome({
      ...newIncome,
      [e.target.name]: e.target.value,
      created: new Date().toLocaleString(),
      modified: new Date().toLocaleString(),
      description: '',
    })
  }
  const handleExpenseChange = (e) => {
    setNewExpense({
      ...newExpense,
      [e.target.name]: e.target.value,
      created: new Date().toLocaleString(),
      modified: new Date().toLocaleString(),
      description: '',
    })
  }

  useEffect(
    () => {
      console.log(`updating data from DB`);
      getDataFromDB();
      setHaveLatestData(true);
      //console.log(`latest data after useeffect: ${latestData}`)
    },
    [haveLatestData]
  )

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
              <td><input name='type' placeholder='ie: Salary' onChange={ (e) => handleIncomeChange(e)}></input></td>
              <td><input name='amount' placeholder='ie: $1000.00' onChange={ (e) => handleIncomeChange(e)}></input></td>
              <td><input name='date' placeholder='ie: YY-MM-DD' onChange={ (e) => handleIncomeChange(e)}></input></td>
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
              <td><input name='date' placeholder='ie: YY-MM-DD' onChange={ (e) => handleExpenseChange(e)}></input></td>
              <td><button onClick={ (event) => sendExpenseToDB(event)}>Add Expense</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <TransactionList 
          props={latestData} 
          getTotalIncome={getTotalIncome()} 
          getTotalExpense={getTotalExpense()} 
          getTotalSmokes={getTotalSmokes()}
          getTotalBeerAlcohol={getTotalBeerAlcohol()}
          />
      </div>

    </div>
  )
}

export default App
