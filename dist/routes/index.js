"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.artifactRouter = exports.taskRouter = exports.projectRouter = void 0;
const artifact_route_1 = __importDefault(require("./artifact.route"));
exports.artifactRouter = artifact_route_1.default;
const project_route_1 = __importDefault(require("./project.route"));
exports.projectRouter = project_route_1.default;
const task_route_1 = __importDefault(require("./task.route"));
exports.taskRouter = task_route_1.default;
//# sourceMappingURL=index.js.map