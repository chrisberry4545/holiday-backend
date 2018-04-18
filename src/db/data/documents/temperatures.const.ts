import {
  TemperatureInterface,
} from '@chrisb-dev/holiday-shared-models';

export const TEMPERATURES: {[key: string]: TemperatureInterface} = {
  ANY_TEMPERATURE: {
    _id: '0',
    name: 'Any temperature',
  },
  HOT_ONLY: {
    _id: '1',
    name: 'I only like it hot',
  },
  WARM: {
    _id: '2',
    name: 'I atleast want it warm',
  },
};
