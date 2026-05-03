const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// conectar MongoDB
connectDB();

// rutas
app.use("/usuarios", require("./routes/usuarioRoutes"));

app.get("/", (req, res) => {
  res.json({ message: "API funcionando 🚀" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor en puerto " + PORT);
});