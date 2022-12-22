import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import taskRoutes from "./routes/taskRoutes.js";
dotenv.config();

// mongoose used to connect node.js with mongoDB
//MongoDB=>collection=>documents=>properties

// Define the properties of the document
// 1. FieldName
// 2. Datatype of the data to be stored in the field

//Database => task-manager =>collections=> document(username: string, completed: boolean

const app = express();
// send data as form-data
app.use(express.urlencoded({ extended: false }));
// send the data as json
app.use(express.json());
// Middleware, used to send cross domain requests
// app.use(cors());

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

app.use("/api/v1/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.status(200).send("<h2>Task Manager</h2>");
});

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running in: http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.log(`Can't able to connect: ${err}`));
