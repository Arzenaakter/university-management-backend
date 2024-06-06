import { TacademicSemester } from './acamedicSemester.interface';
import { acamedicSemesterModel } from './acamedicSemester.model';

const createAcademicSemesterFromDB = async (
  academicSemesterData: TacademicSemester,
) => {
  const result = await acamedicSemesterModel.create(academicSemesterData);
  return result;
};

export const academicSemesterService = {
  createAcademicSemesterFromDB,
};
