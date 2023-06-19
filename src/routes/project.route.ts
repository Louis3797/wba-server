import { Router } from "express";
import { projectController } from "../controller";

const projectRouter = Router();

/**
 * Returns all projects
 */
projectRouter.get("/", projectController.getProjects);

/**
 * Returns latest projects
 */
projectRouter.get("/latest", projectController.getLatestProjects);

/**
 * Returns project with given id
 */
projectRouter.get("/:id", projectController.getProject);

/**
 * Returns all artifacts of a project
 */
projectRouter.get("/:id/artifacts", projectController.getProjectArtifacts);

/**
 * Returns all tasks of a project
 */
projectRouter.get("/:id/tasks", projectController.getProjectTasks);

/**
 * Creates a project
 */
projectRouter.post("/", projectController.createProject);

/**
 * Updates a project
 */
projectRouter.put("/:id", projectController.updateProject);

/**
 * Deletes a project
 */
projectRouter.delete("/:id", projectController.removeProject);

/**
 * Calculates planned working time for projects
 */
projectRouter.get(
  "/:id/plannedWorkingTime",
  projectController.getProjectPlannedWorkingTime
);

/**
 * Calculates working time of the project
 */
projectRouter.get("/:id/workingTime", projectController.getProjectWorkingTime);

// * Relational routes

/**
 * Adds artifact to project
 */
projectRouter.post(
  "/:projectId/add/artifact/:artifactId",
  projectController.addArtifactToProject
);

/**
 * Updates working time in artifact relation
 */
projectRouter.put(
  "/:projectId/update/artifact/:artifactId",
  projectController.updateArtifactWorkingTime
);

/**
 * Removes artifact from project
 */
projectRouter.delete(
  "/:projectId/remove/artifact/:artifactId",
  projectController.removeArtifactFromProject
);

/**
 * Adds task to project
 */
projectRouter.post(
  "/:projectId/add/task/:taskId",
  projectController.addTaskToProject
);

/**
 * Removes task from project
 */
projectRouter.delete(
  "/:projectId/remove/task/:taskId",
  projectController.removeTaskFromProject
);

export default projectRouter;
