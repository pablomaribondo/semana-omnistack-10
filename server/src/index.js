const express = require("express");

const PORT = process.env.PORT || 3333;
const app = express();

app.get("/", (request, response) => response.json({ ok: true }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
