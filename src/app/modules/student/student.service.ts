import { studentModel } from './student.model';

const getAllStudentFromDB = async () => {
  const result = await studentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  // const result = await studentModel.findOne({ id });
  const result = await studentModel.aggregate([{ $match: { id: id } }]);
  return result;
};
const deleteSingleStudentFromDB = async (id: string) => {
  const result = await studentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
