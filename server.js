require("dotenv").config();
require('./config/connection')
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const morgan = require('morgan');
const index = require('./Routes/index_route');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/', index);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

