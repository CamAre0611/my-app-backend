const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// DB
const connectDB = require("./config/db");
connectDB();

// ROUTES
const movementRoutes = require("./routes/movementRoutes");

app.use("/movimientos", movementRoutes);

// TEST
app.get("/", (req, res) => {
  res.send("API Financiera funcionando ✔");
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Servidor en puerto", PORT);
});