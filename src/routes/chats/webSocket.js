const express = require("express");
var router = express.Router();
var expressWs = require("express-ws")(router);
const WebSocket = require("ws");

let clients = [];

router.ws("/", function (ws, req) {
  // chat?chatId=5af04939-7cd5-4bb8-aea1-60a6785188f3

  clients.push(ws);

  console.log("WebSocket connection established");
  console.log(req.query);

  ws.on("message", function (msg) {
    // Senden Sie die Nachricht an alle verbundenen Clients
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });

  ws.on("close", function () {
    // Entfernen Sie den Client aus der Liste, wenn die Verbindung geschlossen wird
    clients = clients.filter((client) => client !== ws);
  });
});

module.exports = router;

//TODO: Do WebSockets implementation here
