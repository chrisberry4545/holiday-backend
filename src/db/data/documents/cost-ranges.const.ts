import {
  CostRangeInterface,
} from '@chrisb-dev/holiday-shared-models';

export const COST_RANGES: {[key: string]: CostRangeInterface} = {
  CHEAP: {
    maxCost: 400,
    minCost: 0,
    name: 'Less than £400',
  },
  EXPENSIVE: {
    maxCost: 1000,
    minCost: 400,
    name: '£400 - £1000',
  },
  MODERATE: {
    maxCost: 99999,
    minCost: 1000,
    name: '£1000+',
  },
};
