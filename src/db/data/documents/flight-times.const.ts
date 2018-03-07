import {
  FlightTimesInterface,
} from '@chrisb-dev/holiday-shared-models';

export const FLIGHT_TIMES: {[key: string]: FlightTimesInterface} = {
  ONE_TO_TWO: {
    _id: '1',
    name: '1 - 2 hours',
    timeMaxMinutes: 120,
    timeMinMinutes: 60,
  },
  TWO_TO_THREE: {
    _id: '2',
    name: '2 - 4',
    timeMaxMinutes: 240,
    timeMinMinutes: 120,
  },
};
