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

// TODO: update income endpoint to use POST method instead of GET
//       will also need GET endpoint to retrieve all incomes from DB
app.get('/api/add/income', (req, res) => {
    console.log(`request received to add income`);
    //console.log(req);
    res.send(`Hello, income!`);
})

// TODO: update expense endpoint to use POST method instead of GET
//       will also need GET endpoint to retrieve all expenses from DB
app.get('/api/add/expense', (req, res) => {
    console.log(`request received to add expense`);
    //console.log(req);
    res.send(`Hello, expense!`);
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})