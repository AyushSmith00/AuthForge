import express from "express";
import authRoutes from "./routes/auth.routes.js"
import logger from "./middleware/auth.logger.js";
import userRoutes from "./routes/user.routes.js";
import { notFound, errorHandler } from "./middleware/auth.errormiddleware.js";
import adminRoutes from "./routes/admin.routes.js"

const app = express();

app.use(express.json());

app.use(logger);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
