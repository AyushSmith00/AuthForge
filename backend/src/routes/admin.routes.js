import express from "express"
import protect from "../middleware/auth.middleware.js"
import authorize from "../middleware/auth.adminmiddleware.js"
import { getAllUsers } from "../controllers/admin.controller.js";
import { forceLogout } from "../controllers/admin.forcelogout.js";
import { deleteUser } from "../controllers/admin.deleteusers.js";
import { choose_roles } from "../controllers/admin.roles.js";

const router = express.Router();

router.get("/dashboard", protect, authorize("admin"), (req, res) => {
  res.json({
    message: "Welcome Admin!",
    admin: req.user.name,
  });
});

router.get("/users", protect, authorize("admin"), getAllUsers);

router.post("/user/:id/logout", protect, authorize("admin"), forceLogout)

router.delete("/user/:id", protect, authorize("admin"), deleteUser)

router.patch("/user/:id/role", protect, authorize("admin"), choose_roles)

export default router;