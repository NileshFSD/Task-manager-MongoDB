import Tasks from "../models/taskModel.js";

export const getAllTasks = (req, res) => {
  res.status(200).send("<h1>Get all the Task</h1>");
};

export const getSingleTask = (req, res) => {
  // const {id} = req.params;
  res.status(200).send("<h1>Get single Task</h1>");
};

export const createTask = async (req, res) => {
  const taskData = req.body;
  const newTaskData = new Tasks(taskData);
  console.log(newTaskData);
  try {
    await newTaskData.save();
    res.status(200).json({
      success: true,
      data: newTaskData,
      msg: "Task added successfully",
    });
  } catch (error) {
    res.status(400).json({ success: false, err: error });
  }
};

export const updateTask = (req, res) => {
  res.status(200).send("<h1>Update Task</h1>");
};
export const deleteTask = (req, res) => {
  res.status(200).send("<h1>Delete Task</h1>");
};
