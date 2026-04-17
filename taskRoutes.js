const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

// Admin only
router.post("/create", authMiddleware, authorizeRoles("admin"), (req, res) => {
  return res.status(201).json({ message: "Task created successfully by admin." });
});

// Admin and user
router.get("/all", authMiddleware, authorizeRoles("admin", "user"), (req, res) => {
  return res.status(200).json({ message: "Tasks fetched successfully." });
});

// User only example
router.put("/update-status/:id", authMiddleware, authorizeRoles("user", "admin"), (req, res) => {
  return res.status(200).json({ message: "Task status updated successfully." });
});

module.exports = router;
