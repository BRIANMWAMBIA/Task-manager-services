const { CustomErrorApi } = require("../error/CustomError");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomErrorApi) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  res.status(500).json({ message: err.message });
};
module.exports = errorHandlerMiddleware;
