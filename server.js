require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

// const DB = process.env.DATABASE_URL.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD
// );
process.on('uncaughtException', (err) => {
  console.log('UNHANDLED_EXCEPTION');
  console.log(err.name, err.message);
  process.exit(1);
});
const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB).then(() => {
  console.log('DB connection successful');
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED_REJECTION');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
