const express = require("express");
const router = express.Router();

router.delete("/", (req, res) => {
  switch (errorSetter) {
    case 204:
      break;
    case 401:
      mockData = {
        error: {
          code: "ERR-014",
          message: "unauthorized",
        },
      };
      break;
    case 404:
      mockData = {
        error: {
          code: "ERR-???",
          message: "not found",
        },
      };
      break;
    case 403:
      mockData = {
        error: {
          code: "ERR-???",
          message: "forbidden",
        },
      };
      break;
  }

  res.status(errorSetter).json(mockData).send();
});
