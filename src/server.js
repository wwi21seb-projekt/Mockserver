const express = require("express");
const app = express();
const port = 3000;
const apiVersion = "v1";

// Middleware für JSON-Parser
app.use(express.json());

//users
app.use(`/api/${apiVersion}/users/login`, require("./routes/users/login/login"));
app.use(`/api/${apiVersion}/users/:username/activate`, require("./routes/users/register/resendToken"));
app.use(`/api/${apiVersion}/users/:username/activate`, require("./routes/users/register/activateUser"));
app.use(`/api/${apiVersion}/users/`, require("./routes/users/register/createUser"));

//imprint
app.use(`/api/${apiVersion}/imprint`, require("./routes/imprint/imprint"));

// Starte den Server
app.listen(port, () => {
  console.log(`Mock-Server läuft auf http://localhost:${port}`);
});
