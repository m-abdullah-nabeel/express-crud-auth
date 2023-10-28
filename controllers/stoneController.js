const StoneModel = require("../models/stoneModel");

exports.findAllStones = async(req, res) => {
    try {
        const stones = await StoneModel.find()
        res.json(stones);
    } catch (error) {
        console.log(error)
    }
}

exports.findStone = async(req, res) => {
  try {
      const stones = await StoneModel.findById(req.params.id)
      res.json(stones);
  } catch (error) {
      console.log(error)
  }
}


exports.UpdateStone = async(req, res) => {
  try {
      const stone = await StoneModel.findById(req.params.id)
      // const stone_update = new StoneModel({
        stone.name = req.body.name,
        stone.image = req.body.image,
        stone.brand = req.body.brand,
        stone.range = req.body.range,
        stone.description = req.body.description,
        stone.finish = req.body.finish,
        stone.size = req.body.size,
        stone.width = req.body.width,
        stone.color_pattern = req.body.color_pattern,
        stone.tones = req.body.tones
      // });
    
      // Save Stone in the database
      const updated_stone = await stone.save()
  
      res.json(updated_stone);

  } catch (error) {
      console.log(error)
  }
}

exports.DeleteStone = async(req, res) => {
  try {
      const stones = await StoneModel.findByIdAndRemove(req.params.id)
      res.json({
        message: "Stone deleted successfully."
      });
  } catch (error) {
      console.log(error)
  }
}

exports.createStone = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Name can not be empty!" });
      return;
    }
  
    // Create a Stone
    const stone = new StoneModel({
      name: req.body.name,
      image: req.body.image,
        //   published: req.body.published ? req.body.published : false,
      brand: req.body.brand,
      range: req.body.range,
      description: req.body.description,
      finish: req.body.finish,
      size: req.body.size,
      width: req.body.width,
      color_pattern: req.body.color_pattern,
      tones: req.body.tones
    });
  
    // Save Stone in the database
    stone
    .save(stone)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Stone."
      });
    });
};