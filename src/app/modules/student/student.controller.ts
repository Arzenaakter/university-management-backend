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

export const studentController = {
  createStudent,
};
