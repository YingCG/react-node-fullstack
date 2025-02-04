// Step 1: server/index.js

const express = require("express");

const PORT = process.env.PORT || 4001;

const app = express();

// // Step 2: Create an API Endpoint
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });

// Step 3: handel api
const path = require("path");

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
