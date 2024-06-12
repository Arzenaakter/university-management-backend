import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RequestHandler } from 'express';
import { academicDepartmentService } from './academicDepartment.service';

const createAcademicDepartment: RequestHandler = catchAsync(
  async (req, res) => {
    const result =
      await academicDepartmentService.createAcademicDepartmentFromDB(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department is Created successfully',
      data: result,
    });
  },
);
const getAllAcademicDepartment: RequestHandler = catchAsync(
  async (req, res) => {
    const result =
      await academicDepartmentService.getAllAcademicDepartmentFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get all academic Department successfully',
      data: result,
    });
  },
);
const getSingleAcademicDepartment: RequestHandler = catchAsync(
  async (req, res) => {
    const { AcademicDepartmentId } = req.params;
    const result =
      await academicDepartmentService.getSingleAcademicDepartmentFromDB(
        AcademicDepartmentId,
      );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get single academic Department successfully',
      data: result,
    });
  },
);
const updateAcademicDepartment: RequestHandler = catchAsync(
  async (req, res) => {
    const { AcademicDepartmentId } = req.params;
    const result =
      await academicDepartmentService.updateAcademicDepartmentFromDB(
        AcademicDepartmentId,
        req.body,
      );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department is updated successfully',
      data: result,
    });
  },
);

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
