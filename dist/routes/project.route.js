"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const projectRouter = (0, express_1.Router)();
/**
 * Returns all projects
 */
projectRouter.get("/", controller_1.projectController.getProjects);
/**
 * Returns latest projects
 */
projectRouter.get("/latest", controller_1.projectController.getLatestProjects);
/**
 * Returns project with given id
 */
projectRouter.get("/:id", controller_1.projectController.getProject);
/**
 * Returns all artifacts of a project
 */
projectRouter.get("/:id/artifacts", controller_1.projectController.getProjectArtifacts);
/**
 * Returns all tasks of a project
 */
projectRouter.get("/:id/tasks", controller_1.projectController.getProjectTasks);
/**
 * Creates a project
 */
projectRouter.post("/", controller_1.projectController.createProject);
/**
 * Updates a project
 */
projectRouter.put("/:id", controller_1.projectController.updateProject);
/**
 * Deletes a project
 */
projectRouter.delete("/:id", controller_1.projectController.removeProject);
/**
 * Calculates planned working time for projects
 */
projectRouter.get("/:id/plannedWorkingTime", controller_1.projectController.getProjectPlannedWorkingTime);
/**
 * Calculates working time of the project
 */
projectRouter.get("/:id/workingTime", controller_1.projectController.getProjectWorkingTime);
// * Relational routes
/**
 * Adds artifact to project
 */
projectRouter.post("/:projectId/add/artifact/:artifactId", controller_1.projectController.addArtifactToProject);
/**
 * Updates working time in artifact relation
 */
projectRouter.put("/:projectId/update/artifact/:artifactId", controller_1.projectController.updateArtifactWorkingTime);
/**
 * Removes artifact from project
 */
projectRouter.delete("/:projectId/remove/artifact/:artifactId", controller_1.projectController.removeArtifactFromProject);
/**
 * Adds task to project
 */
projectRouter.post("/:projectId/add/task/:taskId", controller_1.projectController.addTaskToProject);
/**
 * Removes task from project
 */
projectRouter.delete("/:projectId/remove/task/:taskId", controller_1.projectController.removeTaskFromProject);
exports.default = projectRouter;
//# sourceMappingURL=project.route.js.map