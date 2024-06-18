import { Schema, model } from 'mongoose';
import { TacademicSemester } from './acamedicSemester.interface';
import {
  AcademicSemesterCode,
  academicSemesterName,
  months,
} from './academicSemester.constants';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

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

academicSemesterSchema.pre('save', async function (next) {
  const isAcademicSemesterExists = await acamedicSemesterModel.findOne({
    name: this.name,
    year: this.year,
  });
  if (isAcademicSemesterExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Semester is already exist');
  }
  next();
});

export const acamedicSemesterModel = model<TacademicSemester>(
  'academicSemester',
  academicSemesterSchema,
);
