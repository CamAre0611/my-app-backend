const Movement = require("../models/Movement");

// GET
exports.getMovements = async (req, res) => {
  try {
    const data = await Movement.find().sort({ fecha: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST
exports.createMovement = async (req, res) => {
  try {
    const movement = new Movement(req.body);
    await movement.save();
    res.json(movement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT
exports.updateMovement = async (req, res) => {
  try {
    const updated = await Movement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteMovement = async (req, res) => {
  try {
    await Movement.findByIdAndDelete(req.params.id);
    res.json({ message: "Movimiento eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};