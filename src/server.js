const express = require("express");
const app = express();
const port = 3000;
const apiVersion = "v1";

// Middleware für JSON-Parser
app.use(express.json());

// Beispiel-Endpunkt für Benutzer (/api/users)
app.use(`/api/${apiVersion}/users/login`, require("./routes/login"));
app.use(`/api/${apiVersion}/users/:username/activate`, require("./routes/resendToken"));

// Beispiel-Endpunkt für Beiträge (/api/imprint)
app.use(`/api/${apiVersion}/imprint`, require("./routes/imprint"));

// Starte den Server
app.listen(port, () => {
  console.log(`Mock-Server läuft auf http://localhost:${port}`);
});
