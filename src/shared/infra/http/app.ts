import 'reflect-metadata';
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';

import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';
import AppError from '@shared/errors/AppError';
import http, { Server } from 'http';
import '@shared/infra/typeorm';
import '@shared/container';
import routes from './routes';

class App {
  public app: any;

  public server: Server;

  constructor() {
    this.app = express();
    this.server = new http.Server(this.app);

    this.middlewares();

    this.routes();

    this.exceptionHandler();

  }

  middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());

  }

  routes(): void {
    this.app.use(routes);
  }

  exceptionHandler(): void {
    this.app.use(errors());

    this.app.use(
      (
        err: Error,
        request: Request,
        response: Response,
        _: NextFunction,
      ) => {
        if (err instanceof AppError) {
          return response
            .status(err.statusCode)
            .json({ status: 'error', message: err.message });
        }

        return response.status(500).json({
          status: 'error',
          message: 'Erro interno no servidor',
        });
      },
    );
  }
}

export default new App().server;
