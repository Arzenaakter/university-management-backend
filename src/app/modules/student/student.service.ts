import { studentModel } from './student.model';
import { Student } from './student.interface';

const createStudentIntoDB = async (student: Student) => {
  const result = await studentModel.create(student);
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await studentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await studentModel.findOne({ id });
  return result;
};
const deleteSingleStudentFromDB = async (id: string) => {
  const result = await studentModel.deleteOne({ id });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
