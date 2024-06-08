import { academicSemesterNameCodeMapper } from './academicSemester.constants';
import { TacademicSemester } from './acamedicSemester.interface';
import { acamedicSemesterModel } from './acamedicSemester.model';

const createAcademicSemesterFromDB = async (
  academicSemesterData: TacademicSemester,
) => {
  // semester name--> semester code

  if (
    academicSemesterNameCodeMapper[academicSemesterData.name] !==
    academicSemesterData.code
  ) {
    throw new Error('Invalid semester code');
  }
  const result = await acamedicSemesterModel.create(academicSemesterData);
  return result;
};

const getAllAcademicSemesterFromDB = async () => {
  const result = await acamedicSemesterModel.find();
  return result;
};

const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await acamedicSemesterModel.findOne({ _id: id });
  return result;
};

export const academicSemesterService = {
  createAcademicSemesterFromDB,
  getAllAcademicSemesterFromDB,
  getSingleAcademicSemesterFromDB,
};
