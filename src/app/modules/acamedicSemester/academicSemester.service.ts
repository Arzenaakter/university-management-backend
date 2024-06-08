import {
  TAcademicSemesterNameCodeMapper,
  TacademicSemester,
} from './acamedicSemester.interface';
import { acamedicSemesterModel } from './acamedicSemester.model';

const createAcademicSemesterFromDB = async (
  academicSemesterData: TacademicSemester,
) => {
  // semester name--> semester code
  const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
  };
  if (
    academicSemesterNameCodeMapper[academicSemesterData.name] !==
    academicSemesterData.code
  ) {
    throw new Error('Invalid semester code');
  }
  const result = await acamedicSemesterModel.create(academicSemesterData);
  return result;
};

export const academicSemesterService = {
  createAcademicSemesterFromDB,
};
