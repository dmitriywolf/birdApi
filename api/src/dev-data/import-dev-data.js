const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Bird = require('../models/birdModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DB_LOCALE;

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connection success'));

// Read json file
const birds = JSON.parse(fs.readFileSync(`${__dirname}/birds.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Bird.create(birds);
    console.log('Data succesful loaded');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// DELETE all data from DB
const deleteData = async () => {
  try {
    await Bird.deleteMany();
    console.log('Data succesful deleted');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log(process.argv);
