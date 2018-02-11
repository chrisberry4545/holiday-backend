import * as express from 'express';

import * as bodyParser from 'body-parser';

import {
  holidayResultsApi,
  userInputFormDataApi,
} from './api';

import {
  corsMiddleware,
  robotsMiddleware,
} from './middleware';

import {
  API_URLS,
} from '@chrisb-dev/holiday-shared-models';

import {
  LOGGER,
} from './utilities';

const app = express();
const port = process.env.PORT || 5000;

robotsMiddleware(app);
corsMiddleware(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('\n\nHoliday backend\n\n');
});

app.get(`/${API_URLS.USER_INPUT_FORM_DATA}`, (req, res) => {
  res.send(userInputFormDataApi().getUserInputFormData());
});

app.post(`/${API_URLS.HOLIDAY_RESULTS}`, (req, res) => {
  res.send(holidayResultsApi().getHoliday(req.body));
});

app.listen(port, () => {
  LOGGER.log(`listening on port ${port}`);
});
