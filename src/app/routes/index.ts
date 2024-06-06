import { Router } from 'express';
import { studentRoutes } from '../modules/student/student.route';
import { userRoutes } from '../modules/user/user.route';
import { academicSemesterRoutes } from '../modules/acamedicSemester/acamedicSemester.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/student',
    route: studentRoutes,
  },
  {
    path: '/user',
    route: userRoutes,
  },
  {
    path: '/academic-semester',
    route: academicSemesterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
