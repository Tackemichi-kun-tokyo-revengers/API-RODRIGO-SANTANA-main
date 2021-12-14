require("dotenv-expand")(require("dotenv").config());
const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);
app.use("/uploads", express.static("uploads"));

app.listen(process.env.API_PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.API_PORT}`);
});
