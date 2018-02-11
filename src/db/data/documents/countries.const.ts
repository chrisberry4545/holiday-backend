import {
  CountryInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  CONTINENTS,
  FOOD_TYPES,
} from './';

export const COUNTRIES: {[key: string]: CountryInterface} = {
  CHINA: {
    _id: '3',
    continent: CONTINENTS.ASIA,
    foodTypes: [FOOD_TYPES.MACDONALDS, FOOD_TYPES.SPICY],
    name: 'China',
  },
  COSTA_RICA: {
    _id: '1',
    continent: CONTINENTS.CENTRAL_AMERICA,
    foodTypes: [FOOD_TYPES.MACDONALDS, FOOD_TYPES.MEDITERRANEAN],
    name: 'Costa Rica',
  },
  MEXICO: {
    _id: '2',
    continent: CONTINENTS.CENTRAL_AMERICA,
    foodTypes: [FOOD_TYPES.MACDONALDS, FOOD_TYPES.MIDDLE_EASTERN],
    name: 'Mexico',
  },
};
