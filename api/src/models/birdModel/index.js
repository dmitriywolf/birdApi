const mongoose = require('mongoose');

const { Schema } = mongoose;

const birdSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'A name is required'],
      trim: true,
      unique: true,
      maxlength: [30, 'A bird name must have less or equal then 30 chracter'],
      minlength: [5, 'A bird name must have more or equal then 3 characters'],
    },
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: [
        10,
        'A bird description have must more or equal 10 characters',
      ],
    },
  },
  { versionKey: false }
);

const Bird = mongoose.model('Bird', birdSchema);

module.exports = Bird;
