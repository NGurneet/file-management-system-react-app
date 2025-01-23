import express from "express";
import userRoutes from "./user/user.route";
import fileRoutes from "./file/file.route"
import folderRoutes from "./folder/folder.route"

// routes
const router = express.Router();

router.use("/users", userRoutes);
router.use("/files", fileRoutes);
router.use("/folders", folderRoutes);

export default router;