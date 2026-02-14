const express = require('express');
const router =require('./Routes/user.route');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/auth', router);
module.exports = app;