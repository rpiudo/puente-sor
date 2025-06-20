const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/xt9c6j6knf4d0ccx649vct9tzsas65al";

app.post("/", async (req, res) => {
  try {
    const response = await axios.post(MAKE_WEBHOOK_URL, req.body);
    res.status(200).send("✅ Datos reenviados a Make correctamente");
  } catch (error) {
    console.error("❌ Error al reenviar a Make:", error.message);
    res.status(500).send("❌ Error al reenviar a Make");
  }
});

app.get("/", (req, res) => {
  res.send("🌐 Puente S.O.R. activo");
});

app.listen(3000, () => {
  console.log("🚀 Puente corriendo en puerto 3000");
});
