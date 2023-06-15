"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTaskFromProject = exports.addTaskToProject = exports.removeArtifactFromProject = exports.updateArtifactWorkingTime = exports.addArtifactToProject = exports.getProjectWorkingTime = exports.getProjectPlannedWorkingTime = exports.removeProject = exports.updateProject = exports.createProject = exports.getProjectTasks = exports.getProjectArtifacts = exports.getProject = exports.getLatestProjects = exports.getProjects = void 0;
const http_status_1 = __importDefault(require("http-status"));
const service_1 = require("../service");
const getProjects = async (_req, res) => {
    const projects = await service_1.projectService.queryProjects();
    res.status(http_status_1.default.OK).json(projects);
};
exports.getProjects = getProjects;
const getLatestProjects = async (_req, res) => {
    const projects = await service_1.projectService.queryLatestProjects();
    res.status(http_status_1.default.OK).json(projects);
};
exports.getLatestProjects = getLatestProjects;
const getProject = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "ID needs to be defined!" });
    }
    const project = await service_1.projectService.findProject(id);
    if (!project) {
        return res
            .status(http_status_1.default.NOT_FOUND)
            .json({ message: "Project not found!" });
    }
    res.status(http_status_1.default.OK).json(project);
};
exports.getProject = getProject;
const getProjectArtifacts = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "ID needs to be defined!" });
    }
    const project = await service_1.projectService.findProjectArtifacts(id);
    if (!project) {
        return res
            .status(http_status_1.default.NOT_FOUND)
            .json({ message: "Project not found!" });
    }
    res.status(http_status_1.default.OK).json(project);
};
exports.getProjectArtifacts = getProjectArtifacts;
const getProjectTasks = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "ID needs to be defined!" });
    }
    const project = await service_1.projectService.findProjectTasks(id);
    if (!project) {
        return res
            .status(http_status_1.default.NOT_FOUND)
            .json({ message: "Project not found!" });
    }
    res.status(http_status_1.default.OK).json(project);
};
exports.getProjectTasks = getProjectTasks;
const createProject = async (req, res) => {
    const { shortDescription, logo, longDescription, startDate, endDate, title } = req.body;
    if (!shortDescription ||
        !longDescription ||
        !logo ||
        !startDate ||
        !endDate ||
        !title) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "Send Body is not correct" });
    }
    const project = await service_1.projectService.createProject({
        shortDescription,
        longDescription,
        logo,
        startDate,
        endDate,
        title,
    });
    res.status(http_status_1.default.CREATED).json(project);
};
exports.createProject = createProject;
const updateProject = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "ID needs to be defined!" });
    }
    const { shortDescription, logo, longDescription, startDate, endDate, title } = req.body;
    if (!shortDescription ||
        !longDescription ||
        !logo ||
        !startDate ||
        !endDate ||
        !title) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "Send Body is not correct" });
    }
    const project = await service_1.projectService.updateProject(id, {
        shortDescription,
        longDescription,
        logo,
        startDate,
        endDate,
        title,
    });
    res.status(http_status_1.default.OK).json(project);
};
exports.updateProject = updateProject;
const removeProject = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "ID needs to be defined!" });
    }
    const project = await service_1.projectService.deleteProject(id);
    res.status(http_status_1.default.OK).json(project);
};
exports.removeProject = removeProject;
const getProjectPlannedWorkingTime = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "ID needs to be defined!" });
    }
    const result = await service_1.projectService.calculatePlannedWorkingTime(id);
    if (!result) {
        return res
            .status(http_status_1.default.NOT_FOUND)
            .json({ message: "Project not found!" });
    }
    res.status(http_status_1.default.OK).json(result);
};
exports.getProjectPlannedWorkingTime = getProjectPlannedWorkingTime;
const getProjectWorkingTime = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "ID needs to be defined!" });
    }
    const result = await service_1.projectService.calculateWorkingTime(id);
    if (!result) {
        return res
            .status(http_status_1.default.NOT_FOUND)
            .json({ message: "Project not found!" });
    }
    res.status(http_status_1.default.OK).json(result);
};
exports.getProjectWorkingTime = getProjectWorkingTime;
const addArtifactToProject = async (req, res) => {
    const { workingTime } = req.body;
    const { projectId, artifactId } = req.params;
    console.log(workingTime);
    if (!projectId || !artifactId) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "IDs needs to be defined!" });
    }
    if (typeof workingTime === "undefined") {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "workingTime is not defined" });
    }
    const result = await service_1.projectService.connectArtifactToProject(projectId, artifactId, workingTime);
    res.status(http_status_1.default.CREATED).json(result);
};
exports.addArtifactToProject = addArtifactToProject;
const updateArtifactWorkingTime = async (req, res) => {
    const { workingTime } = req.body;
    const { projectId, artifactId } = req.params;
    if (!projectId || !artifactId) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "IDs needs to be defined!" });
    }
    if (typeof workingTime === "undefined") {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "workingTime is not defined" });
    }
    const result = await service_1.projectService.updateWorkingTime(projectId, artifactId, workingTime);
    res.status(http_status_1.default.OK).json(result);
};
exports.updateArtifactWorkingTime = updateArtifactWorkingTime;
const removeArtifactFromProject = async (req, res) => {
    const { projectId, artifactId } = req.params;
    if (!projectId || !artifactId) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "IDs needs to be defined!" });
    }
    const result = await service_1.projectService.disconnectArtifactFromProject(projectId, artifactId);
    res.status(http_status_1.default.OK).json(result);
};
exports.removeArtifactFromProject = removeArtifactFromProject;
const addTaskToProject = async (req, res) => {
    const { projectId, taskId } = req.params;
    if (!projectId || !taskId) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "IDs needs to be defined!" });
    }
    const result = await service_1.projectService.connectTaskToProject(projectId, taskId);
    res.status(http_status_1.default.CREATED).json(result);
};
exports.addTaskToProject = addTaskToProject;
const removeTaskFromProject = async (req, res) => {
    const { projectId, taskId } = req.params;
    if (!projectId || !taskId) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "IDs needs to be defined!" });
    }
    const result = await service_1.projectService.disconnectTaskFromProject(projectId, taskId);
    res.status(http_status_1.default.CREATED).json(result);
};
exports.removeTaskFromProject = removeTaskFromProject;
//# sourceMappingURL=project.controller.js.map