import express from "express";
import {register_user} from "../controllers/auth.controllers.js";
import {login_user, getUserprofile} from "../controllers/auth.login.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", register_user);
router.post("/login", login_user);
router.get("/me",protect, getUserprofile);


export default router;