import { Router } from "express";
import { artifactController } from "../controller";

const artifactRouter = Router();

/**
 * Gets all artifacts
 */
artifactRouter.get("/", artifactController.getArtifacts);

/**
 * Gets artifact per id
 */
artifactRouter.get("/:id", artifactController.getArtifact);

/**
 * Gets artifact and task per artifact id
 */
artifactRouter.get("/:id/task", artifactController.getArtifactWithTask);

/**
 * Create artifact
 */
artifactRouter.post("/", artifactController.createArtifact);

/**
 * Update artifact
 */
artifactRouter.put("/:id", artifactController.updateArtifact);

/**
 * Delete artifact
 */
artifactRouter.delete("/:id", artifactController.removeArtifact);

export default artifactRouter;
