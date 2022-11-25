import "dotenv/config";
import http from "http";
import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";

import router from "../src/routes";

const app: Application = express();

// https://expressjs.com/en/advanced/best-practice-security.html
app.use(helmet());

app.use(cors());
app.use(express.json());
app.use(router);

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log('Server is running on PORT ' + process.env.PORT);
});