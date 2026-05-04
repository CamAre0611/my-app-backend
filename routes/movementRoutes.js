const express = require("express");
const router = express.Router();
const Movement = require("../models/Movement");

// 🔹 GET - trae datos reales de MongoDB
router.get("/", async (req, res) => {
  try {
    const movements = await Movement.find().sort({ fecha: -1 });
    res.json(movements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 POST - GUARDA EN MONGODB REAL
router.post("/", async (req, res) => {
  try {
    const newMovement = new Movement(req.body);
    const saved = await newMovement.save();

    res.json(saved); // 👈 devuelve lo guardado
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 PUT - actualizar
router.put("/:id", async (req, res) => {
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
});

// 🔹 DELETE - eliminar
router.delete("/:id", async (req, res) => {
  try {
    await Movement.findByIdAndDelete(req.params.id);
    res.json({ message: "Movimiento eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;