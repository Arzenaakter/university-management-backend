import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.route';
import { userRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
// app.use('/api/v1/student', studentRoutes);
// app.use('/api/v1/user', userRoutes);
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('server is running');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
