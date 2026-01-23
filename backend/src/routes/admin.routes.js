import express from "express"
import protect from "../middleware/auth.middleware.js"
import authorize from "../middleware/auth.adminmiddleware.js"

const router = express.Router();

router.get("/dashboard", protect, authorize("admin"), (req, res) => {
  res.json({
    message: "Welcome Admin!",
    admin: req.user.name,
  });
});

export default router;