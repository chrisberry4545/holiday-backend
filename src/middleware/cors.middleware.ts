import { Express } from 'express';

const allowedDomains = [
  'http://localhost:3000',
  'https://holiday-app.herokuapp.com',
];

export const corsMiddleware = (app: Express) => {
  app.use((req, res, next) => {

    const requestFrom = req.headers.origin as string;

    if (allowedDomains.indexOf(requestFrom) > -1) {
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', requestFrom);

      // Request methods you wish to allow
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      );

      // Request headers you wish to allow
      res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type',
      );
    }

    // Pass to next layer of middleware
    next();
  });
};
