import express from "express";
import {register_user} from "../controllers/auth.controllers.js";
import {login_user} from "../controllers/auth.login.js";
import protect from "../middleware/auth.middleware.js";
import {logoutUser} from "../controllers/auth.logout.js";

const router = express.Router();

router.post("/register", register_user);
router.post("/login", login_user);
router.post("/logout", protect, logoutUser);


export default router;