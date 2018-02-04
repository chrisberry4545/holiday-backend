import * as express from 'express';

import {
  HOLIDAY_RESULTS,
} from './api';

import {
  API_URLS,
} from '@chrisb-dev/holiday-shared-models';

const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  if ('/robots.txt' == req.url) {
    res.type('text/plain')
    res.send("User-agent: *\nDisallow: /");
  } else {
    next();
  }
});

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Pass to next layer of middleware
  next();
});

app.get('/', (req, res) => {
  res.send('\n\nHello, world!\n\n');
});

app.get(`/${API_URLS.HOLIDAY_RESULTS}`, (req, res) => {
  res.send(HOLIDAY_RESULTS().getHoliday());
});

app.listen(port, () => {
  console.log(`listening on port ${ port }`);
});
