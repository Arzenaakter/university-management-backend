import express from 'express';
import { academicSemesterController } from './acamedicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterValidations } from './acamedicSemester.validation';

const router = express.Router();
router.post(
  '/create-academic-semester',
  validateRequest(
    academicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  academicSemesterController.createAcademicSemester,
);

export const academicSemesterRoutes = router;
