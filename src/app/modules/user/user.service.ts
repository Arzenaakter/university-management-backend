import config from "../../config";
import { TStudent } from "../student/student.interface";
import { studentModel } from "../student/student.model";
import {  TUser } from "./user.interface";
import { userModel } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create user
 const user:Partial<TUser> = {} // partial means optional

  // if password not given, use default
  user.password = password || config.default_pass as string
 
  // set role
  user.role = 'student'
  user.id = '20240001'

// create user
  const newUser = await userModel.create(user)
  // create student
  if (Object.keys(newUser)) {
      studentData.id = newUser.id;
    studentData.user = newUser._id //refernce id
    
    const newStudent = await studentModel.create(studentData)
    return newStudent
  }
 

};

export const userServices = {
  createStudentIntoDB
  
}