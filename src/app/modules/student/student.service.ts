import { studentModel } from './student.model';
import { Student } from './student.interface';

const createStudentIntoDB = async (studentData: Student) => {
  // const result = await studentModel.create(studentData); // build in static method

  const student = new studentModel(studentData);
  const result = await student.save(); // build in instance method
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
  const result = await studentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
