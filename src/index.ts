import * as express from 'express';

import {
  HOLIDAY_RESULTS,
} from './api';

import {
  API_URLS,
} from '@chrisb-dev/holiday-shared-models';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('\n\nHello, world!\n\n');
});

app.get(`/${API_URLS.HOLIDAY_RESULTS}`, (req, res) => {
  res.send(HOLIDAY_RESULTS().getHoliday());
});

app.listen(port, () => {
  console.log(`listening on port ${ port }`);
});
