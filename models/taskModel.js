import mongoose from "mongoose";

const tasksSchema = mongoose.Schema({
  username: String,
  completed: Boolean,
});

const Tasks = mongoose.model("tasks", tasksSchema);

export default Tasks;
