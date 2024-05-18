import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body; // get data from client
    // will call service to send this data
    const result = await studentServices.createStudentIntoDB(studentData);
    // send response
    res.status(200).json({
      success: true,
      message: 'Student Created successfully',
      data: studentData,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const allStudentData = await studentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: ' Get all student successfully',
      data: allStudentData,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const singleStudentData =
      await studentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: ' Get single student successfully',
      data: singleStudentData,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const singleStudentData =
      await studentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: ' Delete student successfully',
      data: singleStudentData,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  deleteSingleStudent,
};
