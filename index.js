const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const express = require("express");
const courseRouter = require("./routes/course-routes");
const dbConnect = require("./config/db-connect");
const path = require("path");

const app = express();
dbConnect();

app.use(express.json());

app.use("/api/v1/courses", courseRouter);

app.use("/api/v1/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(process.env.PORT, () => {
  console.log(`sever running on port ${process.env.PORT}`);
});
