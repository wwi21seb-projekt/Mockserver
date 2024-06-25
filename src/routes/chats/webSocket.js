const express = require("express");
var router = express.Router();
var expressWs = require("express-ws")(router);
const WebSocket = require("ws");

let clients = [];
/* //Codes:
200: OK
400: Bad Request
401: Unauthorized
404: Not Found
*/
let errorSetter = 200;

router.ws("/", function (ws, req) {
  // chat?chatId=5af04939-7cd5-4bb8-aea1-60a6785188f3

  switch (errorSetter) {
    case 200:
      clients.push(ws);
      console.log("WebSocket connection established");
      break;
    case 400:
      clients.push(ws);
      console.log("WebSocket connection established");
      break;
    case 401:
      message = {
        error: {
          message: "You are not authorized. Please log in and try again.",
          code: "ERR-014",
        },
      };
      ws.send(JSON.stringify(message));
      break;
    case 404:
      message = {
        error: {
          message:
            "The chat was not found. Please check the chat ID and try again.",
          code: "ERR-027",
        },
      };
      console.log(message);
      ws.send(JSON.stringify(message));
      break;
  }

  ws.on("message", function (msg) {
    // Senden Sie die Nachricht an alle verbundenen Clients

    let message = {
      content: JSON.parse(msg).content,
      creationDate: new Date().toISOString(),
      username: "test_user",
    };
    console.log("Received message: ", message);
    switch (errorSetter) {
      case 200:
        const encodedMessage = JSON.stringify(message);
        clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(encodedMessage);
          }
        });
        break;
      case 400:
        message = {
          error: {
            message:
              "The message is too long. Please shorten the message to below 256 characters and try again.",
            code: "ERR-",
          },
        };
        const currentClient = clients.find((client) => client === ws);
        currentClient.send(JSON.stringify(message));
        break;
    }
  });

  ws.on("close", function () {
    // Entfernen Sie den Client aus der Liste, wenn die Verbindung geschlossen wird
    clients = clients.filter((client) => client !== ws);
  });
});

module.exports = router;

//TODO: Do WebSockets implementation here
