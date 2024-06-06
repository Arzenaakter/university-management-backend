import { Schema, model } from 'mongoose';
import { TacademicSemester } from './acamedicSemester.interface';
import {
  AcademicSemesterCode,
  academicSemesterName,
  months,
} from './academicSemester.constants';

const academicSemesterSchema = new Schema<TacademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: academicSemesterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: months,
    },
  },
  {
    timestamps: true,
  },
);

export const acamedicSemesterModel = model<TacademicSemester>(
  'academicSemester',
  academicSemesterSchema,
);
