import express, { Express } from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import config from "./config/config";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandler } from "./middleware/errorHandler";
import { artifactRouter, projectRouter, taskRouter } from "./routes";

const app: Express = express();

app.use(morgan("tiny"));

// Helmet is used to secure this app by configuring the http-header
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// Compression is used to reduce the size of the response body
app.use(compression());

app.use(
  cors({
    // origin is given a array if we want to have multiple origins later
    origin: String(config.cors.origin).split("|"),
    credentials: true,
  })
);

// Register routes
app.use("/api/project", projectRouter);

app.use("/api/task", taskRouter);

app.use("/api/artifact", artifactRouter);

// handle unknown routes
app.all("*", (_req, res) => {
  res.status(404);

  res.json({ error: "404 Not Found" });
});

app.use(errorHandler);

export default app;
