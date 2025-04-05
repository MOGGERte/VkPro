import { body } from 'express-validator';
import { validationErrors } from '../consts/validationErrors.js';

export const registrationValidator = [
  body('email')
    .isString()
    .withMessage(validationErrors.string)
    .notEmpty()
    .withMessage(validationErrors.required)
    .isEmail()
    .withMessage(validationErrors.email),
  body('firstName')
    .isString()
    .withMessage(validationErrors.string)
    .notEmpty()
    .withMessage(validationErrors.required)
    .isLength({ min: 2, max: 32 })
    .withMessage(validationErrors.minMaxLength({ min: 2, max: 32 })),
  body('secondName')
    .optional({ checkFalsy: true })
    .isString()
    .withMessage(validationErrors.string)
    .isLength({ min: 2, max: 32 })
    .withMessage(validationErrors.minMaxLength({ min: 2, max: 32 })),
  body('password')
    .isString()
    .withMessage(validationErrors.string)
    .notEmpty()
    .withMessage(validationErrors.required)
    .isLength({ min: 6, max: 255 })
    .withMessage(validationErrors.minMaxLength({ min: 6, max: 255 }))
    .isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    })
    .withMessage(validationErrors.weakPassword)
];

export const loginValidator = [
  body('email')
    .isString()
    .withMessage(validationErrors.string)
    .notEmpty()
    .withMessage(validationErrors.required)
    .isEmail()
    .withMessage(validationErrors.email),
  body('password')
    .isString()
    .withMessage(validationErrors.string)
    .notEmpty()
    .withMessage(validationErrors.required)
];
