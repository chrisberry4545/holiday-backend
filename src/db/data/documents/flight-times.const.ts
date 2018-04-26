import {
  FlightTimesInterface,
} from '@chrisb-dev/holiday-shared-models';

const flightTimes = [
  0,
  120,
  360,
  720,
  Number.MAX_SAFE_INTEGER,
];

export const FLIGHT_TIMES: {[key: string]: FlightTimesInterface} = {
  LESS_THAN_TWO: {
    _id: '1',
    name: 'Less than 2 hours',
    timeMaxMinutes: flightTimes[1],
    timeMinMinutes: flightTimes[0],
  },
  // tslint:disable-next-line
  LESS_THAN_SIX: {
    _id: '2',
    name: 'Less than 6 hours',
    timeMaxMinutes: flightTimes[2],
    timeMinMinutes: flightTimes[1],
  },
  // tslint:disable-next-line
  LESS_THAN_TWELVE: {
    _id: '3',
    name: 'Less than 12 hours',
    timeMaxMinutes: flightTimes[3],
    timeMinMinutes: flightTimes[2],
  },
  // tslint:disable-next-line
  ANY_FLIGHT_TIME: {
    _id: '4',
    name: 'Any flight time',
    timeMaxMinutes: flightTimes[4],
    timeMinMinutes: flightTimes[3],
  },
};
