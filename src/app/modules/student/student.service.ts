import { studentModel } from './student.model';

const getAllStudentFromDB = async () => {
  const result = await studentModel
    .find()
    .populate('admissionSemester')
    .populate({
      // student model refer academicDepartment and  academicDepartment refer academicFaculty
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  // const result = await studentModel.findOne({ id });
  const result = await studentModel
    .findById(id)
    .populate('admissionSemester')
    .populate({
      // student model refer academicDepartment and  academicDepartment refer academicFaculty
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
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
