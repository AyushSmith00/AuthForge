import express from "express";
import { getUserprofile} from "../controllers/auth.profile.js"
import protect from "../middleware/auth.middleware.js";

const router = express.Router();


router.get("/me",protect, getUserprofile)

export default router;
