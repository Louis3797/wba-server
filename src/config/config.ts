import * as dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

const config = {
  node_env: process.env.NODE_ENV!,
  app: {
    port: process.env.PORT!,
    host: process.env.HOST!,
  },
  cors: {
    origin: process.env.CORS_ORIGIN!,
  },
} as const;

export default config;
