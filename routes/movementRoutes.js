const express = require("express");
const router = express.Router();

// GET TODOS LOS MOVIMIENTOS
router.get("/", (req, res) => {
  res.json([
    {
      _id: "1",
      tipo: "ingreso",
      monto: 1000,
      categoria: "Salario",
      descripcion: "Ejemplo"
    }
  ]);
});

// POST
router.post("/", (req, res) => {
  res.json({ message: "Movimiento creado", data: req.body });
});

// PUT
router.put("/:id", (req, res) => {
  res.json({ message: "Movimiento actualizado" });
});

// DELETE
router.delete("/:id", (req, res) => {
  res.json({ message: "Movimiento eliminado" });
});

module.exports = router;