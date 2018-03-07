import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  COUNTRIES,
  FLIGHT_TIMES,
} from './';

export const HOLIDAYS: {[key: string]: HolidayInterface} = {
  CHINA: {
    _id: '3',
    activities: [],
    country: COUNTRIES.CHINA,
    flight: {
      cost: 100,
      flightTime: FLIGHT_TIMES.ONE_TO_TWO,
    },
    name: 'China holiday',
  },
  COSTA_RICA: {
    _id: '4',
    activities: [],
    country: COUNTRIES.COSTA_RICA,
    flight: {
      cost: 600,
      flightTime: FLIGHT_TIMES.ONE_TO_TWO,
    },
    name: 'Costa Rica holiday',
  },
  MEXICO: {
    _id: '2',
    activities: [],
    country: COUNTRIES.MEXICO,
    flight: {
      cost: 500,
      flightTime: FLIGHT_TIMES.ONE_TO_TWO,
    },
    name: 'Mexico holiday',
  },
};
