import {
  TemperatureInterface,
} from '@chrisb-dev/holiday-shared-models';

export const TEMPERATURES: {[key: string]: TemperatureInterface} = {
  ANY_TEMPERATURE: {
    _id: '0',
    minValue: -999,
    name: 'Any temperature',
  },
  WARM: {
    _id: '1',
    minValue: 15,
    name: 'I atleast want it warm',
  },
  // tslint:disable-next-line
  HOT_ONLY: {
    _id: '2',
    minValue: 25,
    name: 'I only like it hot',
  },
};
