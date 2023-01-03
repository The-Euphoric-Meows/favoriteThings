const express = require('express');
const path = require('path');
const app = express();
const PORT = 1963;
const showRouter = require('./routes/showRouter');

app.use('/shows', )

app.get('/', (req, res) => {
  res.send('hello nurse')
})

app.listen(PORT, () => console.log(`Listening on the port of our TimeLord, ${PORT}`))