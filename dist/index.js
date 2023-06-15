"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config/config"));
const logger_1 = __importDefault(require("./middleware/logger"));
const port = Number(config_1.default.app.port) || 4040;
const server = app_1.default.listen(port, config_1.default.app.host, () => {
    logger_1.default.log("info", `Server is running on Port: ${port}`);
});
process.on("SIGTERM", () => {
    logger_1.default.info("SIGTERM signal received.");
    logger_1.default.info("Closing server.");
    server.close((err) => {
        logger_1.default.info("Server closed.");
        // eslint-disable-next-line no-process-exit
        process.exit(err ? 1 : 0);
    });
});
//# sourceMappingURL=index.js.map