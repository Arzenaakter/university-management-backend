import { z } from 'zod';

const createAcademicFacultyValidation = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'Academic Faculty be a string' }),
  }),
});
const updateAcademicFacultyValidation = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'Academic Faculty be a string' }),
  }),
});
export const academicFacultyValidation = {
  createAcademicFacultyValidation,
  updateAcademicFacultyValidation,
};
