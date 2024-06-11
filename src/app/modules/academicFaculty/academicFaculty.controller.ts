import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { academicFacultyService } from './academicFaculty.service';
import { RequestHandler } from 'express';

const createAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
  const result = await academicFacultyService.createAcademicFacultyFromDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty is Created successfully',
    data: result,
  });
});
const getAllAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
  const result = await academicFacultyService.getAllAcademicFacultyFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all academic faculty successfully',
    data: result,
  });
});
const getSingleAcademicFaculty: RequestHandler = catchAsync(
  async (req, res) => {
    const { academicFacultyId } = req.params;
    const result =
      await academicFacultyService.getSingleAcademicFacultyFromDB(
        academicFacultyId,
      );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get single academic faculty successfully',
      data: result,
    });
  },
);
const updateAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
  const { academicFacultyId } = req.params;
  const result = await academicFacultyService.updateAcademicFacultyFromDB(
    academicFacultyId,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is updated successfully',
    data: result,
  });
});

export const academicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
