const express = require("express");
const app = express();
const port = 3000;
const apiVersion = "v1";

// Middleware für JSON-Parser
app.use(express.json());

app.use(`/api/${apiVersion}/users/login`, require("./routes/login"));
app.use(
  `/api/${apiVersion}/users/:username/activate`,
  require("./routes/resendToken")
);
app.use(
  `/api/${apiVersion}/users/:username/activate`,
  require("./routes/activateUser")
);
app.use(`/api/${apiVersion}/imprint`, require("./routes/imprint"));

// Starte den Server
app.listen(port, () => {
  console.log(`Mock-Server läuft auf http://localhost:${port}`);
});
