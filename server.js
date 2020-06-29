const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(cors());

const api = require('./routes/api');
const users = require('./routes/users');
app.use('/api', api);
app.use('/api/users', users);

const port = 3000;
app.listen(port, () => console.log(`Run on port: ${port}`));