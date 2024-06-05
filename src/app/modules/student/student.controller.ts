import { NextFunction, Request, RequestHandler, Response } from 'express';
import { studentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';




const getAllStudent:RequestHandler = catchAsync(async (req, res, next) => {
 
    const allStudentData = await studentServices.getAllStudentFromDB();
     sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
        message: ' Get all student successfully',
        data : allStudentData
    })
   
 
});


const getSingleStudent :RequestHandler= catchAsync(async (req, res,next) => {
  
    const { studentId } = req.params;
    const singleStudentData =
      await studentServices.getSingleStudentFromDB(studentId);
    
     sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
        message: ' Get single student successfully',
        data : singleStudentData
    })

    // res.status(200).json({
    //   success: true,
    //   message: ' Get single student successfully',
    //   data: singleStudentData,
    // });
 
});
const deleteSingleStudent:RequestHandler = catchAsync(async (req, res,next) => {
 
    const { studentId } = req.params;
    const singleStudentData =
      await studentServices.getSingleStudentFromDB(studentId);
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
        message: ' Delete student successfully',
        data : singleStudentData
    })
   
 
});

export const studentController = {
  getAllStudent,
  getSingleStudent,
  deleteSingleStudent,
};
