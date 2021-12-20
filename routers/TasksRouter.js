const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/TasksController");

router.route("/").get(getAll).post(createTask);
router.route("/:id").get(getById).put(updateTask).delete(deleteTask);
module.exports = router;
