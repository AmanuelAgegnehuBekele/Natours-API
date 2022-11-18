const express = require('express');
const morgan = require('morgan');

const app = express();

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

//middle wares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome' });
});

//routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
