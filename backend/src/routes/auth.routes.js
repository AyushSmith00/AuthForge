import express from "express";
import {register_user} from "../controllers/auth.controllers.js";
import {login_user} from "../controllers/auth.login.js";
import protect from "../middleware/auth.middleware.js";
import {logoutUser} from "../controllers/auth.logout.js";
import { refresh_token } from "../controllers/auth.refreshcontroller.js";
import { loginLimitter, refreshLimitter } from "../middleware/auth.ratelimitingmiddleware.js";

const router = express.Router();

router.post("/register", register_user);
router.post("/login", loginLimitter, login_user);
router.post("/refresh", refreshLimitter, refresh_token);
router.post("/logout", protect, logoutUser);


export default router;