const express = require("express");
const cors = require("cors");
const router = require("./routes");

// App + Middleware
const app = express();
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("src/public"));

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/api", router);

// Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log(`App running on port ${PORT}`);
});
