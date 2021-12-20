const express = require("express");
const connectDB = require("./data/connect");
const app = express();
const tasks = require("./routers/TasksRouter");
require("dotenv").config();
const not_found = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware");
//middlewares
app.use(express.json());
app.use("/api/tasks", tasks);
app.use(errorHandlerMiddleware);
app.use(not_found);
const port = process.env.PORT || 8080;
app.listen(port, async () => {
  await connectDB(process.env.MONGO_URI);
  console.log(`server listening on port localhost ${port}`);
});
