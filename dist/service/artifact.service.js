"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteArtifact = exports.updateArtifact = exports.createArtifact = exports.findArtifactWithTask = exports.findArtifact = exports.queryArtifacts = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const queryArtifacts = async () => {
    return await prisma_1.default.artifact.findMany();
};
exports.queryArtifacts = queryArtifacts;
const findArtifact = async (id) => {
    return await prisma_1.default.artifact.findUnique({
        where: { id },
    });
};
exports.findArtifact = findArtifact;
const findArtifactWithTask = async (id) => {
    return await prisma_1.default.artifact.findUnique({
        where: { id },
        include: {
            task: true,
        },
    });
};
exports.findArtifactWithTask = findArtifactWithTask;
const createArtifact = async (data) => {
    return await prisma_1.default.artifact.create({
        data,
    });
};
exports.createArtifact = createArtifact;
const updateArtifact = async (id, data) => {
    return await prisma_1.default.artifact.update({
        where: { id },
        data,
    });
};
exports.updateArtifact = updateArtifact;
const deleteArtifact = async (id) => {
    return await prisma_1.default.artifact.delete({
        where: { id },
    });
};
exports.deleteArtifact = deleteArtifact;
//# sourceMappingURL=artifact.service.js.map