import {
  CostRangeInterface,
} from '@chrisb-dev/holiday-shared-models';

export const COST_RANGES: {[key: string]: CostRangeInterface} = {
  CHEAP: {
    _id: '0',
    maxCost: 400,
    minCost: 0,
    name: 'Less than £400',
  },
  EXPENSIVE: {
    _id: '1',
    maxCost: 1000,
    minCost: 400,
    name: '£400 - £1000',
  },
  MODERATE: {
    _id: '2',
    maxCost: 99999,
    minCost: 1000,
    name: '£1000+',
  },
};
