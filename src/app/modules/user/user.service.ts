import config from '../../config';
import { TacademicSemester } from '../acamedicSemester/acamedicSemester.interface';
import { acamedicSemesterModel } from '../acamedicSemester/acamedicSemester.model';
import { TStudent } from '../student/student.interface';
import { studentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { userModel } from './user.model';
import { generateStudentdId } from './user.utils';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create user
  const userData: Partial<TUser> = {}; // partial means optional

  // if password not given, use default
  userData.password = password || (config.default_pass as string);

  // set role
  userData.role = 'student';

  // find academic semester info
  const admissionSmester = await acamedicSemesterModel.findById(
    studentData.admissionSemester,
  );

  userData.id = await generateStudentdId(admissionSmester as TacademicSemester);

  // create user
  const newUser = await userModel.create(userData);
  // create student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id; //refernce id

    const newStudent = await studentModel.create(studentData);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDB,
};
