import { z } from 'zod';

const createAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Department be a string',
      required_error: 'Name is required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Department be a string',
      required_error: 'Faculty is required',
    }),
  }),
});
const updateAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z
      .string({ invalid_type_error: 'Academic Department be a string' })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic Faculty be a string',
      })
      .optional(),
  }),
});
export const academicDepartmentValidation = {
  createAcademicDepartmentValidation,
  updateAcademicDepartmentValidation,
};
