import { Router } from "express";
import { taskController } from "../controller";

const taskRouter = Router();

/**
 * Gets all tasks
 */
taskRouter.get("/", taskController.getTasks);

/**
 * Gets task per id
 */
taskRouter.get("/:id", taskController.getTask);

/**
 * Create task
 */
taskRouter.post("/", taskController.createTask);

/**
 * Update task
 */
taskRouter.put("/:id", taskController.updateTask);

/**
 * Delete task
 */
taskRouter.delete("/:id", taskController.removeTask);

export default taskRouter;
