import { NextFunction, Request, RequestHandler, Response } from "express";
import { userServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const createStudent : RequestHandler = catchAsync(async (req, res,next) => {
  
    const { password,student: studentData } = req.body; 
 
    // const zodParseData = studentValidationSchema.parse(studentData);
    const result = await userServices.createStudentIntoDB(password, studentData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
        message: 'Student Created successfully',
        data : result
    })

});

export const userControllers = {
  createStudent
}