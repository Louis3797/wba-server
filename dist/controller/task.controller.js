"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTask = exports.updateTask = exports.createTask = exports.getTask = exports.getTasks = void 0;
const http_status_1 = __importDefault(require("http-status"));
const service_1 = require("../service");
const getTasks = async (_req, res) => {
    const tasks = await service_1.taskService.queryTasks();
    res.status(http_status_1.default.OK).json(tasks);
};
exports.getTasks = getTasks;
const getTask = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "ID needs to be defined!" });
    }
    const task = await service_1.taskService.findTask(id);
    if (!task) {
        return res
            .status(http_status_1.default.NOT_FOUND)
            .json({ message: "task not found!" });
    }
    res.status(http_status_1.default.OK).json(task);
};
exports.getTask = getTask;
const createTask = async (req, res) => {
    const { shortDescription, title } = req.body;
    if (!shortDescription || !title) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "Send Body is not correct" });
    }
    const task = await service_1.taskService.createTask({
        shortDescription,
        title,
    });
    res.status(http_status_1.default.CREATED).json(task);
};
exports.createTask = createTask;
const updateTask = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "ID needs to be defined!" });
    }
    const { shortDescription, title } = req.body;
    if (!shortDescription || !title) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "Send Body is not correct" });
    }
    const task = await service_1.taskService.updateTask(id, {
        shortDescription,
        title,
    });
    res.status(http_status_1.default.OK).json(task);
};
exports.updateTask = updateTask;
const removeTask = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res
            .status(http_status_1.default.BAD_REQUEST)
            .json({ message: "ID needs to be defined!" });
    }
    const task = await service_1.taskService.deleteTask(id);
    res.status(http_status_1.default.OK).json(task);
};
exports.removeTask = removeTask;
//# sourceMappingURL=task.controller.js.map