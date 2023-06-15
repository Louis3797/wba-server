"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectTaskFromProject = exports.connectTaskToProject = exports.disconnectArtifactFromProject = exports.updateWorkingTime = exports.connectArtifactToProject = exports.calculateWorkingTime = exports.calculatePlannedWorkingTime = exports.deleteProject = exports.updateProject = exports.createProject = exports.findProjectTasks = exports.findProjectArtifacts = exports.findProject = exports.queryLatestProjects = exports.queryProjects = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const queryProjects = async () => {
    return await prisma_1.default.project.findMany();
};
exports.queryProjects = queryProjects;
const queryLatestProjects = async () => {
    return await prisma_1.default.project.findMany({
        orderBy: {
            startDate: "desc",
        },
        take: 10,
    });
};
exports.queryLatestProjects = queryLatestProjects;
const findProject = async (id) => {
    return await prisma_1.default.project.findUnique({
        where: { id },
    });
};
exports.findProject = findProject;
const findProjectArtifacts = async (id) => {
    return await prisma_1.default.project.findUnique({
        where: { id },
        include: {
            projectToArtifact: {
                select: {
                    artifact: true,
                    worktime: true,
                },
            },
        },
    });
};
exports.findProjectArtifacts = findProjectArtifacts;
const findProjectTasks = async (id) => {
    return await prisma_1.default.project.findUnique({
        where: { id },
        include: {
            projectToTask: {
                select: {
                    task: true,
                },
            },
        },
    });
};
exports.findProjectTasks = findProjectTasks;
const createProject = async (data) => {
    return await prisma_1.default.project.create({
        data,
    });
};
exports.createProject = createProject;
const updateProject = async (id, data) => {
    return await prisma_1.default.project.update({
        where: { id },
        data,
    });
};
exports.updateProject = updateProject;
const deleteProject = async (id) => {
    return await prisma_1.default.project.delete({
        where: { id },
    });
};
exports.deleteProject = deleteProject;
const calculatePlannedWorkingTime = async (id) => {
    const artifactTimes = await prisma_1.default.project.findUnique({
        where: { id },
        select: {
            projectToArtifact: {
                select: {
                    artifact: {
                        select: {
                            plannedWorkingTime: true,
                        },
                    },
                },
            },
        },
    });
    let sum = 0;
    if (!artifactTimes) {
        return null;
    }
    for (const temp of artifactTimes?.projectToArtifact) {
        sum += temp.artifact.plannedWorkingTime;
    }
    return { sum };
};
exports.calculatePlannedWorkingTime = calculatePlannedWorkingTime;
const calculateWorkingTime = async (id) => {
    const project = await prisma_1.default.project.findUnique({
        where: { id },
        select: {
            projectToArtifact: {
                select: {
                    worktime: true,
                },
            },
        },
    });
    let sum = 0;
    if (!project) {
        return null;
    }
    for (const temp of project.projectToArtifact) {
        if (temp.worktime) {
            sum += temp.worktime;
        }
    }
    return { sum };
};
exports.calculateWorkingTime = calculateWorkingTime;
const connectArtifactToProject = async (projectId, artifactId, workingTime = 0) => {
    return await prisma_1.default.projectToArtifact.create({
        data: {
            project_id: projectId,
            artifact_id: artifactId,
            worktime: workingTime,
        },
    });
};
exports.connectArtifactToProject = connectArtifactToProject;
const updateWorkingTime = async (projectId, artifactId, workingTime) => {
    return await prisma_1.default.projectToArtifact.update({
        where: {
            artifact_id_project_id: {
                project_id: projectId,
                artifact_id: artifactId,
            },
        },
        data: {
            worktime: workingTime,
        },
    });
};
exports.updateWorkingTime = updateWorkingTime;
const disconnectArtifactFromProject = async (projectId, artifactId) => {
    return await prisma_1.default.projectToArtifact.delete({
        where: {
            artifact_id_project_id: {
                project_id: projectId,
                artifact_id: artifactId,
            },
        },
    });
};
exports.disconnectArtifactFromProject = disconnectArtifactFromProject;
const connectTaskToProject = async (projectId, taskId) => {
    return await prisma_1.default.projectToTask.create({
        data: {
            project_id: projectId,
            task_id: taskId,
        },
    });
};
exports.connectTaskToProject = connectTaskToProject;
const disconnectTaskFromProject = async (projectId, taskId) => {
    return await prisma_1.default.projectToTask.delete({
        where: {
            project_id_task_id: {
                project_id: projectId,
                task_id: taskId,
            },
        },
    });
};
exports.disconnectTaskFromProject = disconnectTaskFromProject;
//# sourceMappingURL=project.service.js.map