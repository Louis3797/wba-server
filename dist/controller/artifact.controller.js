"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeArtifact = exports.updateArtifact = exports.createArtifact = exports.getArtifactWithTask = exports.getArtifact = exports.getArtifacts = void 0;
const http_status_1 = __importDefault(require("http-status"));
const service_1 = require("../service");
const getArtifacts = async (_req, res) => {
    const artifacts = await service_1.artifactService.queryArtifacts();
    res.status(http_status_1.default.OK).json(artifacts);
};
exports.getArtifacts = getArtifacts;
const getArtifact = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "ID needs to be defined!" });
    }
    const artifact = await service_1.artifactService.findArtifact(id);
    if (!artifact) {
        return res
            .status(http_status_1.default.NOT_FOUND)
            .json({ message: "artifact not found!" });
    }
    res.status(http_status_1.default.OK).json(artifact);
};
exports.getArtifact = getArtifact;
const getArtifactWithTask = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "ID needs to be defined!" });
    }
    const artifact = await service_1.artifactService.findArtifactWithTask(id);
    if (!artifact) {
        return res
            .status(http_status_1.default.NOT_FOUND)
            .json({ message: "artifact not found!" });
    }
    res.status(http_status_1.default.OK).json(artifact);
};
exports.getArtifactWithTask = getArtifactWithTask;
const createArtifact = async (req, res) => {
    const { plannedWorkingTime, shortDescription, title, task_id } = req.body;
    console.log(req.body.plannedWorkingTime);
    if (!shortDescription || !title || !plannedWorkingTime || !task_id) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "Send Body is not correct" });
    }
    const artifact = await service_1.artifactService.createArtifact({
        plannedWorkingTime: plannedWorkingTime,
        shortDescription: shortDescription,
        title: title,
        task_id: task_id,
    });
    res.status(http_status_1.default.CREATED).json(artifact);
};
exports.createArtifact = createArtifact;
const updateArtifact = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "ID needs to be defined!" });
    }
    const { plannedWorkingTime, shortDescription, title, task_id } = req.body;
    if (!shortDescription || !title || !plannedWorkingTime || !task_id) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "Send Body is not correct" });
    }
    const artifact = await service_1.artifactService.updateArtifact(id, {
        plannedWorkingTime,
        shortDescription,
        title,
        task_id,
    });
    res.status(http_status_1.default.OK).json(artifact);
};
exports.updateArtifact = updateArtifact;
const removeArtifact = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "ID needs to be defined!" });
    }
    const artifact = await service_1.artifactService.deleteArtifact(id);
    res.status(http_status_1.default.OK).json(artifact);
};
exports.removeArtifact = removeArtifact;
//# sourceMappingURL=artifact.controller.js.map