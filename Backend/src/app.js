const express = require('express');
const router1 =require('./Routes/user.route');
const router2 =require('./Routes/post.route');
const followrouter = require('./Routes/follow.route');
const cookieParser = require('cookie-parser'); // Add this line
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent with requests
}));
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/auth', router1);
app.use('/api/post', router2);
app.use('/api', followrouter);
module.exports = app;