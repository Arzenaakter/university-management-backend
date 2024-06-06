import { Request, RequestHandler, Response } from 'express';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { academicSemesterService } from './academicSemester.service';
import catchAsync from '../../utils/catchAsync';

const createAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  // const { academicSemesterData } = req.body;
  const result = await academicSemesterService.createAcademicSemesterFromDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is Created successfully',
    data: result,
  });
});

export const academicSemesterController = {
  createAcademicSemester,
};
