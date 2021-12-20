class CustomErrorApi extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
const CreateCustomError = (message, statusCode) => {
  return new CustomErrorApi(message, statusCode);
};
module.exports = { CustomErrorApi, CreateCustomError };
