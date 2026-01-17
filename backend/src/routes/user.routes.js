import express from "express";
import {register_user} from "../controllers/auth.controllers.js"
import {login_user, getUserprofile} from "../controllers/auth.login.js"

const router = express.Router();

router.post("/register", register_user);
router.post("/login", login_user);

router.get("/me", getUserprofile)

export default router;
