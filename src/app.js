const express = require("express");
const cors = require("cors");

const isUnix = (date) => {
  const valid = new Date(date).getTime() > 0;
  return valid;
};

// App + Middleware
const app = express();
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("src/public"));

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/hello", (req, res) => {
  res.status(200).json({ greeting: "First API endpoint" });
});

// Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log(`App running on port ${PORT}`);
});
