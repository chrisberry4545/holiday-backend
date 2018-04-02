import * as express from 'express';

import * as bodyParser from 'body-parser';

import {
  dataAccessApi,
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
  userInputFormDataApi().getUserInputFormData().then((results) => {
    res.send(results);
  });
});

app.post(`/${API_URLS.HOLIDAY_RESULTS}`, (req, res) => {
  holidayResultsApi().getHoliday(req.body).then((holidays) => {
    res.send(holidays);
  });
});

app.get('/data', (req, res) => {
  dataAccessApi().getAllData().then((data) => {
    res.send(data);
  });
});

app.post('/data', (req, res) => {
  dataAccessApi().saveHolidayData(req.body).then(() => {
    res.send();
  });
});

app.listen(port, () => {
  LOGGER.log(`listening on port ${port}`);
});
