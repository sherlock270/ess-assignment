const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

server.listen(8000, () => {
  console.log("=== listening on port 8000 ===");
});
