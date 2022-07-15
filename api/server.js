const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./src/app');

mongoose.connect(
  process.env.DB_LOCALE,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) return err;
    console.log('Database connected');
    app.listen(3000, 'localhost', () =>
      console.log('Server started on port: 3000')
    );
  }
);
