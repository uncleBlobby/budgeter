const express = require('express');

const cors = require('cors');

// still need to add DB and DB integration, for now just spin up server

const app = express();
const port = 3001;

app.use(cors({
    origin: 'http://localhost:3000',
}))

app.use(express.json());

app.get('/', (req, res) => {
    console.log('request received');
    console.log(req);
    res.send('Hello, world!');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})