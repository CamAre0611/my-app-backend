const mongoose = require("mongoose");

const MovementSchema = new mongoose.Schema({
  tipo: {
    type: String,
    enum: ["ingreso", "gasto"],
    required: true,
  },
  monto: {
    type: Number,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  descripcion: String,
  fecha: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Movement", MovementSchema);