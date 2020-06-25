const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(cors());

const api = require('./routes/api');
app.use('/api', api);

const port = 3000;
app.listen(port, () => console.log(`Run on port: ${port}`));