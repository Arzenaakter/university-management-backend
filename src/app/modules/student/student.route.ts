import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();
router.post('/create-user', studentController.createStudent);
router.get('/', studentController.getAllStudent);
router.get('/:studentId', studentController.getSingleStudent);

export const studentRoutes = router;