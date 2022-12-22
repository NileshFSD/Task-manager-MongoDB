import express from "express";
import {
  getAllTasks,
  getSingleTask,
  updateTask,
  createTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

// Getting All tasks
// http://localhost:5000/api/v1/tasks
router.get("/", getAllTasks);

// Get Single
// http://localhost:5000/api/v1/tasks/:id
router.get("/:id", getSingleTask);

// Create task
// http://localhost:5000/api/v1/tasks

router.post("/", createTask);

// Update task
// http://localhost:5000/api/v1/tasks/:id

router.put("/:id", updateTask);

// Delete task
// http://localhost:5000/api/v1/tasks/:id

router.delete("/:id", deleteTask);

export default router;
