import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartmentModel } from './academicDepartment.model';

const createAcademicDepartmentFromDB = async (payload: TAcademicDepartment) => {
  // const isDepartmentExists = await AcademicDepartmentModel.findOne({
  //   name: payload.name,
  // });
  // if (isDepartmentExists) {
  //   throw new Error(`${payload.name} is already exists`);
  // }
  const result = await AcademicDepartmentModel.create(payload);
  return result;
};
const getAllAcademicDepartmentFromDB = async () => {
  const result = await AcademicDepartmentModel.find().populate(
    'academicFaculty', //property name from model ref
  );
  return result;
};
const getSingleAcademicDepartmentFromDB = async (id: string) => {
  const result = await AcademicDepartmentModel.findById(id).populate(
    'academicFaculty', //property name from model ref
  );
  return result;
};
const updateAcademicDepartmentFromDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartmentModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const academicDepartmentService = {
  createAcademicDepartmentFromDB,
  getAllAcademicDepartmentFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentFromDB,
};
