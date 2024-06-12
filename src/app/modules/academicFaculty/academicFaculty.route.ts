import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyController } from './academicFaculty.controller';
import { academicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();
router.post(
  '/create-academic-faculty',
  validateRequest(academicFacultyValidation.createAcademicFacultyValidation),
  academicFacultyController.createAcademicFaculty,
);
router.get(
  '/all-academic-faculty',
  academicFacultyController.getAllAcademicFaculty,
);
router.get(
  '/:academicFacultyId',
  academicFacultyController.getSingleAcademicFaculty,
);
router.patch(
  '/:academicFacultyId',
  validateRequest(academicFacultyValidation.updateAcademicFacultyValidation),
  academicFacultyController.updateAcademicFaculty,
);

export const academicFacultyRoutes = router;
