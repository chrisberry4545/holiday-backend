import {
  TemperatureInterface,
} from '@chrisb-dev/holiday-shared-models';

export const TEMPERATURES: {[key: string]: TemperatureInterface} = {
  LESS_THAN_TEN: {
    _id: '0',
    name: '< 10 degrees',
  },
  TEN_TO_TWENTY: {
    _id: '1',
    name: '10-20 degrees',
  },
  THIRTY_PLUS: {
    _id: '2',
    name: '30 plus',
  },
  TWENTY_TO_THIRTY: {
    _id: '3',
    name: '20-30 degrees',
  },
};
