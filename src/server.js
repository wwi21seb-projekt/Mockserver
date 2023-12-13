const express = require("express");
const app = express();
const port = 3000;
const apiVersion = "v1";
const cors =  require("cors")

// Middleware für das Protokollieren von Anfragen
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

 app.use(cors({
   origin: '*',
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
   credentials: true,
   optionsSuccessStatus: 204,
 }))
 //Middleware für JSON-Parser
app.use(express.json());

//users
app.use(
  `/api/${apiVersion}/users/login`,
  require("./routes/users/login/login")
);
app.use(
  `/api/${apiVersion}/users/:username/activate`,
  require("./routes/users/register/resendToken")
);
app.use(
  `/api/${apiVersion}/users/:username/activate`,
  require("./routes/users/register/activateUser")
);
app.use(
  `/api/${apiVersion}/users`,
  require("./routes/users/register/createUser")
);

//imprint
app.use(`/api/${apiVersion}/imprint`, require("./routes/imprint/imprint"));

// Starte den Server
app.listen(port, () => {
  console.log(`Mock-Server läuft auf http://localhost:${port}`);
});
