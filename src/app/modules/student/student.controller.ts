import { Request, Response } from 'express';
import { studentServices } from './student.service';
import studentValidationSchema from './student.validation';
// import studentValidationSchema from './student.joi.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    //

    const { student: studentData } = req.body; // get data from client
    // const { error, value } = studentValidationSchema.validate(studentData); // joi
    // console.log({ error }, { value });

    // data validation using zod
    const zodParseData = studentValidationSchema.parse(studentData);

    // this error checking for using joi
    // if (error) {
    //   res.status(400).json({
    //     success: false,
    //     message: 'Something went wrong !',
    //     error,
    //   });
    // }

    // will call service to send this data
    const result = await studentServices.createStudentIntoDB(zodParseData);
    // send response
    res.status(200).json({
      success: true,
      message: 'Student Created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong !',
      error: error,
    });
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
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong !',
      error: error,
    });
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
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong !',
      error: error,
    });
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
    res.status(400).json({
      success: false,
      message: 'Something went wrong !',
      error: error,
    });
    console.log(error);
  }
};

export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  deleteSingleStudent,
};
