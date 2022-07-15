const Bird = require('../../models/birdModel');

exports.getAllBirds = async (req, res) => {
  try {
    const birds = await Bird.find({});

    res.status(200).json({
      status: 'success',
      count: birds.length,
      data: { birds },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getBird = async (req, res) => {
  try {
    const { id } = req.params;
    const bird = await Bird.findOne({ _id: id });

    res.status(200).json({
      status: 'success',
      data: { bird },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Not found',
    });
  }
};

exports.createBird = async (req, res) => {
  try {
    const newBird = await Bird.create(req.body);

    res.status(201).json({ status: 'success', data: { bird: newBird } });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.editBird = async (req, res) => {
  try {
    const { id } = req.params;

    const bird = await Bird.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: { bird },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteBird = async (req, res) => {
  try {
    const { id } = req.params;
    await Bird.findByIdAndDelete(id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
