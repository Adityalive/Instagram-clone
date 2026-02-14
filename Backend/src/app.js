const express = require('express');
const router1 =require('./Routes/user.route');
const router2 =require('./Routes/post.route');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/auth', router1);
app.use('/api/post', router2);
module.exports = app;