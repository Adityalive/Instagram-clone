require('dotenv').config();

const app = require('./app');
const connectDB = require('../config/Database');

const port = process.env.PORT || 3000;

async function startServer() {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
  });
}

startServer();
