const Tasks = require("../models/Tasks");
const asyncWrapper = require("../middlewares/async");
const { CreateCustomError } = require("../error/CustomError");
const getAll = asyncWrapper(async (req, res) => {
  const tasks = await Tasks.find({});
  res.status(200).json({ tasks });
});
const getById = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Tasks.findOne({ _id: taskId });
  if (!task) {
    return next(CreateCustomError(`product with the ${taskId} not found`, 404));
  }
  res.status(200).json({ task });
});
const createTask = asyncWrapper(async (req, res) => {
  const newTask = await Tasks.create(req.body);
  res.status(201).json({ newTask });
});
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Tasks.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    res.status(404).json({ message: `product  with id ${id} not found` });
  } else {
    res.status(200).json({ task });
  }
});
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Tasks.findOneAndDelete({ _id: taskId });
  if (!task) {
    res.status(404).send(`product wit id ${taskId} not found`);
  } else {
    res.status(200).send();
  }
});
module.exports = { getAll, getById, createTask, updateTask, deleteTask };
