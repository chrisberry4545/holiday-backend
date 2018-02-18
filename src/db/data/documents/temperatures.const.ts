import {
  TemperatureInterface,
} from '@chrisb-dev/holiday-shared-models';

export const TEMPERATURES: {[key: string]: TemperatureInterface} = {
  LESS_THAN_TEN: {
    name: '< 10 degrees',
  },
  TEN_TO_TWENTY: {
    name: '10-20 degrees',
  },
  THIRTY_PLUS: {
    name: '30 plus',
  },
  TWENTY_TO_THIRTY: {
    name: '20-30 degrees',
  },
};
