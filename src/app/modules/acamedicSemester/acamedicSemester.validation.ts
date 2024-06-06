import { z } from 'zod';
import {
  AcademicSemesterCode,
  academicSemesterName,
  months,
} from './academicSemester.constants';

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...academicSemesterName] as [string, ...string[]]),
    code: z.enum([...AcademicSemesterCode] as [string, ...string[]]),
    year: z.string(),
    startMonth: z.enum([...months] as [string, ...string[]]),
    endMonth: z.enum([...months] as [string, ...string[]]),
  }),
});

export const academicSemesterValidations = {
  createAcademicSemesterValidationSchema,
};
