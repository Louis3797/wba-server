"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.findTask = exports.queryTasks = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const queryTasks = async () => {
    return await prisma_1.default.task.findMany();
};
exports.queryTasks = queryTasks;
const findTask = async (id) => {
    return await prisma_1.default.task.findUnique({
        where: { id },
    });
};
exports.findTask = findTask;
const createTask = async (data) => {
    return await prisma_1.default.task.create({
        data,
    });
};
exports.createTask = createTask;
const updateTask = async (id, data) => {
    return await prisma_1.default.task.update({
        where: { id },
        data,
    });
};
exports.updateTask = updateTask;
const deleteTask = async (id) => {
    return await prisma_1.default.task.delete({
        where: { id },
    });
};
exports.deleteTask = deleteTask;
//# sourceMappingURL=task.service.js.map