import { Express } from 'express';

const allowedDomains = [
  'http://localhost:3000',
  'http://agitated-visvesvaraya-4a0d81.bitballoon.com',
];

export const corsMiddleware = (app: Express) => {
  app.use(function (req, res, next) {

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
