import { validationResult } from 'express-validator';
import { ApiError } from '../components/ApiError.js';
import { CommonErrors } from '../errorMessages/CommonErrors.js';

export const checkValidationErrors = (req, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(ApiError.BadRequest(CommonErrors.validationError, errors.array()));
  }
};
