import * as express from 'express';

import {
  holidayResultsApi,
} from './api';

import {
  corsMiddleware,
  robotsMiddleware,
} from './middleware';

import {
  API_URLS,
} from '@chrisb-dev/holiday-shared-models';

const app = express();
const port = process.env.PORT || 5500;

robotsMiddleware(app);
corsMiddleware(app);

app.get('/', (req, res) => {
  res.send('\n\nHoliday backend\n\n');
});

app.get(`/${API_URLS.HOLIDAY_RESULTS}`, (req, res) => {
  res.send(holidayResultsApi().getHoliday());
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
