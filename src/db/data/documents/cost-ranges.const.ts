import {
  CostRangeInterface,
} from '@chrisb-dev/holiday-shared-models';

const holidayCosts = [
  0,
  400,
  2000,
  Number.MAX_SAFE_INTEGER,
];

export const COST_RANGES: {[key: string]: CostRangeInterface} = {
  CHEAP: {
    _id: '0',
    maxCost: holidayCosts[1],
    minCost: holidayCosts[0],
    name: 'I want my holiday cheap!',
  },
  MODERATE: {
    _id: '1',
    maxCost: holidayCosts[2],
    minCost: holidayCosts[1],
    name: 'Somewhere inbetween',
  },
  // tslint:disable-next-line
  EXPENSIVE: {
    _id: '2',
    maxCost: holidayCosts[3],
    minCost: holidayCosts[2],
    name: 'We got cash to splash',
  },
};
