"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const artifactRouter = (0, express_1.Router)();
/**
 * Gets all artifacts
 */
artifactRouter.get("/", controller_1.artifactController.getArtifacts);
/**
 * Gets artifact per id
 */
artifactRouter.get("/:id", controller_1.artifactController.getArtifact);
/**
 * Gets artifact and task per artifact id
 */
artifactRouter.get("/:id/task", controller_1.artifactController.getArtifactWithTask);
/**
 * Create artifact
 */
artifactRouter.post("/", controller_1.artifactController.createArtifact);
/**
 * Update artifact
 */
artifactRouter.put("/:id", controller_1.artifactController.updateArtifact);
/**
 * Delete artifact
 */
artifactRouter.delete("/:id", controller_1.artifactController.removeArtifact);
exports.default = artifactRouter;
//# sourceMappingURL=artifact.route.js.map