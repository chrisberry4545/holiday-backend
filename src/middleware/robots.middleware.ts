import { Express } from 'express';

export const robotsMiddleware = (app: Express) => {
  app.use((req, res, next) => {
    if ('/robots.txt' == req.url) {
      res.type('text/plain')
      res.send("User-agent: *\nDisallow: /");
    } else {
      next();
    }
  });
};
