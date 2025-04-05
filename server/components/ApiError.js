import { CommonErrors } from '../errorMessages/CommonErrors.js';

export class ApiError extends Error {
  status;
  errors;

  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ApiError(401, CommonErrors.unauthorizedError);
  }

  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors);
  }

  static NotFound() {
    return new ApiError(404, CommonErrors.notFoundError);
  }

  static ServerError(message = CommonErrors.unknownError, errors = []) {
    return new ApiError(500, message, errors);
  }
}
