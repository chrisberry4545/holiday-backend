import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  COUNTRIES,
} from './';

export const HOLIDAYS: {[key: string]: HolidayInterface} = {
  CHINA: {
    _id: '3',
    activities: [],
    country: COUNTRIES.CHINA,
    name: 'China holiday',
  },
  COSTA_RICA: {
    _id: '4',
    activities: [],
    country: COUNTRIES.COSTA_RICA,
    name: 'Costa Rica holiday',
  },
  MEXICO: {
    _id: '2',
    activities: [],
    country: COUNTRIES.MEXICO,
    name: 'Mexico holiday',
  },
};
