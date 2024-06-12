import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentController } from './academicDepartment.controller';

const router = express.Router();
router.post(
  '/create-academic-department',
  validateRequest(
    academicDepartmentValidation.createAcademicDepartmentValidation,
  ),
  AcademicDepartmentController.createAcademicDepartment,
);
router.get(
  '/all-academic-department',
  AcademicDepartmentController.getAllAcademicDepartment,
);
router.get(
  '/:AcademicDepartmentId',
  AcademicDepartmentController.getSingleAcademicDepartment,
);
router.patch(
  '/:AcademicDepartmentId',
  validateRequest(
    academicDepartmentValidation.updateAcademicDepartmentValidation,
  ),
  AcademicDepartmentController.updateAcademicDepartment,
);

export const academicDepartmentRoutes = router;
