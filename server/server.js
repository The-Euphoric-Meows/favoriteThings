const dotenv = require ('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = 1963;
const showRouter = require('./routes/showRouter');
const connectDB = require('./schemas/db');
const cors = require('cors')


connectDB()

app.use(express.urlencoded({extended:false}));
app.use(cors())

app.use('/api/shows', showRouter);

app.get('/', (req, res) => {
  res.send('hello nurse')
})

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' }
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);

  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on the port of our TimeLord, ${PORT}`))