const express = require("express");

const app = express();

const kpiRoutes = require("./routes/kpiRoutes");

app.use("/api/kpi", kpiRoutes);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Sales Analytics API çalışıyor 🚀");
});

module.exports = app;