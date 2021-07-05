const express = require("express");
require("dotenv").config();

const routes = require("./routes");

const PORT = process.env.PORT || 3333;
const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
