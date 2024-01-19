const express = require("express");
const app = express();
const port = 3000;
const apiVersion = "v1";
const cors = require("cors");

// Middleware für das Protokollieren von Anfragen
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);
//Middleware für JSON-Parser
app.use(express.json());

//users
app.use(`/api/users/login`, require("./routes/users/login/login"));
app.use(
  `/api/users/:username/activate`,
  require("./routes/users/register/resendToken")
);
app.use(
  `/api/users/:username/activate`,
  require("./routes/users/register/activateUser")
);
app.use(`/api/users`, require("./routes/users/register/createUser"));
app.use(`/api/users`, require("./routes/users/konfigurieren/changeTriviaInfo"));
app.use(`/api/users`, require("./routes/users/konfigurieren/changePasswort"));

app.use(
  `/api/users`, //offset = start, limit = anzahl
  require("./routes/users/nutzersuche-feed-abonnement/nutzersuche")
);
app.use(
  `/api/users/:username`,
  require("./routes/users/nutzersuche-feed-abonnement/userinfo")
);
app.use(
  `/api/users/:username/feed`,
  require("./routes/users/nutzersuche-feed-abonnement/feed")
);
app.use(
  `/api/subscriptions`,
  require("./routes/users/nutzersuche-feed-abonnement/abonnement")
);
app.use(
  `/api/subscriptions/:subscriptionId`,
  require("./routes/users/nutzersuche-feed-abonnement/unfollow")
);

//posts
app.use(`/api/posts`, require("./routes/posts/createPost"));
app.use(`/api/posts/:postId`, require("./routes/posts/deletePost"));
app.use(`/api/posts`, require("./routes/posts/postSuche"));

//feed
app.use(`/api/feed`, require("./routes/feed/myFeed"));

//imprint
app.use(`/api/imprint`, require("./routes/imprint/imprint"));

//refresh token
app.use(`/api/users/refresh`, require("./routes/token/refreshToken"));

// Starte den Server
app.listen(port, () => {
  console.log(`Mock-Server läuft auf http://localhost:${port}`);
});
