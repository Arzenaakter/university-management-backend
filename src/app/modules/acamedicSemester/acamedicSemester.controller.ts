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

// get all academic semester
const getAllAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const getAllAcademicSemesterData =
    await academicSemesterService.getAllAcademicSemesterFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all academic semester successfully',
    data: getAllAcademicSemesterData,
  });
});
// get single academic semester
const getSingleAcademicSemester: RequestHandler = catchAsync(
  async (req, res) => {
    const { semesterId } = req.params;
    const getSingleAcademicSemesterData =
      await academicSemesterService.getSingleAcademicSemesterFromDB(semesterId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get academic semester successfully',
      data: getSingleAcademicSemesterData,
    });
  },
);

//Update single academic semester
const updateSingleAcademicSemester: RequestHandler = catchAsync(
  async (req, res) => {
    const { semesterId } = req.params;
    const getSingleAcademicSemesterData =
      await academicSemesterService.updateSingleAcademicSemesterFromDB(
        semesterId,
        req.body,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Update semester successfully',
      data: getSingleAcademicSemesterData,
    });
  },
);

export const academicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateSingleAcademicSemester,
};
