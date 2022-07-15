const express = require('express');

const {
  getAllBirds,
  getBird,
  createBird,
  editBird,
  deleteBird,
} = require('../../controllers/birdController');

const birdRouter = express.Router();

birdRouter.get('/', getAllBirds);
birdRouter.get('/:id', getBird);
birdRouter.post('/', createBird);
birdRouter.put('/:id', editBird);
birdRouter.delete('/:id', deleteBird);

module.exports = birdRouter;
