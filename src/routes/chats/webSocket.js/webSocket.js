var router = express.Router();

router.ws("/echo", function (ws, req) {
  ws.on("message", function (msg) {
    ws.send(msg);
  });
});

app.use("/ws-stuff", router);

//TODO: Do WebSockets implementation here
