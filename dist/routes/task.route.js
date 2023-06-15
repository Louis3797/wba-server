"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const taskRouter = (0, express_1.Router)();
/**
 * Gets all tasks
 */
taskRouter.get("/", controller_1.taskController.getTasks);
/**
 * Gets task per id
 */
taskRouter.get("/:id", controller_1.taskController.getTask);
/**
 * Create task
 */
taskRouter.post("/", controller_1.taskController.createTask);
/**
 * Update task
 */
taskRouter.put("/:id", controller_1.taskController.updateTask);
/**
 * Delete task
 */
taskRouter.delete("/:id", controller_1.taskController.removeTask);
exports.default = taskRouter;
//# sourceMappingURL=task.route.js.map