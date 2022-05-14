const express = require('express');
const cors = require('cors');

// still need to add DB and DB integration, for now just spin up server

const app = express();
const port = 3001;

// Enable CORS requests from local frontend development server.
app.use(cors({
    origin: 'http://localhost:3000',
}))

// Enable built-in expressJS JSON body parsing for all requests.
app.use(express.json());

app.get('/', (req, res) => {
    console.log('request received');
    //console.log(req);
    res.send('Hello, world!');
})

// TODO: create SQL statement to qeury DB for all incomes
// FUTURE: will need params to query DB for specific date range
// FUTURE: will also likely want to search for specific incomes
app.get('/api/get/income', (req, res) => {
    console.log(`request received to get incomes`);
    //console.log(req);
    res.send(`Getting incomes from DB!`);
})

// TODO: parse income data and prepare SQL statement to insert into DB
// CURRENTLY: basic SQL statement is prepared, but not sent to DB
// CURRENTLY: entries in SQL statement are not necessarily formatted properly!
app.post('/api/add/income', (req, res) => {
    console.log(`POST request received to add income`);
    console.log(req.body);
    // the below might need to be LET statements
    const incomeData = req.body;
    const incomeSQl = prepareSQLStatement(incomeData, 'income');
    res.send(`Hello, income!`);
})

// TODO: create SQL statement to qeury DB for all expenses
// FUTURE: will need params to query DB for specific date range
// FUTURE: will also likely want to search for specific expenses (types)
app.get('/api/get/expense', (req, res) => {
    console.log(`request received to get expenses`);
    //console.log(req);
    res.send(`Getting expenses from DB!`);
})

// TODO: parse expense data and prepare SQL statement to insert into DB
// CURRENTLY: basic SQL statement is prepared, but not sent to DB
// CURRENTLY: entries in SQL statement are not necessarily formatted properly!
app.post('/api/add/expense', (req, res) => {
    console.log(`POST request received to add expense`);
    console.log(req.body);
    // the below might need to be LET statements
    const expenseData = req.body;
    const expenseSQL = prepareSQLStatement(expenseData, 'expense');
    res.send(`Hello, expense!`);
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

// TODO: in preparing the SQL statement, need to make sure the data is in the correct format..
// for example: strip dollar signs from amount, etc.
// for example: make sure date is in correct format (DD/MM/YY)
// might be easier to make this adjustment on the frontend ??

const prepareSQLStatement = (txnData, txnType) => {
    if (txnType === 'income'){
        let stmt = `INSERT INTO income (${txnData.source}, ${txnData.amount}, ${txnData.date}) VALUES ()`;
        return stmt;
    }
    if (txnType === 'expense'){
        let stmt = `INSERT INTO expense (${txnData.type}, ${txnData.amount}, ${txnData.date}) VALUES ()`;
        return stmt;
    }
    else {
        console.log(`Error: invalid transaction type`);
    }
}