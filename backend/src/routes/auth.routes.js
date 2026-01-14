import express from "express";
import {register_user} from "../controllers/auth.controllers.js";
import {login_user} from "../controllers/auth.login.js";

const router = express.Router();

router.post("/register", register_user);
router.post("/login", login_user)

export default router;