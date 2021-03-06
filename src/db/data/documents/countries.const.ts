import {
  CountryInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  TEMPERATURES,
} from './temperatures.const';

import {
  CONTINENTS,
  FOOD_TYPES,
} from './';

export const COUNTRIES: {[key: string]: CountryInterface} = {
  CHINA: {
    _id: '3',
    continent: CONTINENTS.ASIA,
    foodScore: 10,
    foodTypes: [FOOD_TYPES.MACDONALDS, FOOD_TYPES.SPICY],
    latLng: {
      lat: '0',
      lng: '0',
    },
    monthlyTemperatures: {
      0: TEMPERATURES.TEN_TO_TWENTY,
      1: TEMPERATURES.TEN_TO_TWENTY,
      2: TEMPERATURES.TEN_TO_TWENTY,
      3: TEMPERATURES.TEN_TO_TWENTY,
      4: TEMPERATURES.TEN_TO_TWENTY,
      5: TEMPERATURES.TEN_TO_TWENTY,
      6: TEMPERATURES.TEN_TO_TWENTY,
      7: TEMPERATURES.TEN_TO_TWENTY,
      8: TEMPERATURES.TEN_TO_TWENTY,
      9: TEMPERATURES.TEN_TO_TWENTY,
      10: TEMPERATURES.TEN_TO_TWENTY,
      11: TEMPERATURES.TEN_TO_TWENTY,
    },
    name: 'China',
  },
  COSTA_RICA: {
    _id: '1',
    continent: CONTINENTS.SOUTH_AMERICA,
    foodScore: 7,
    foodTypes: [FOOD_TYPES.MACDONALDS, FOOD_TYPES.MEDITERRANEAN],
    latLng: {
      lat: '0',
      lng: '0',
    },
    monthlyTemperatures: {
      0: TEMPERATURES.TEN_TO_TWENTY,
      1: TEMPERATURES.TEN_TO_TWENTY,
      2: TEMPERATURES.TEN_TO_TWENTY,
      3: TEMPERATURES.TEN_TO_TWENTY,
      4: TEMPERATURES.TEN_TO_TWENTY,
      5: TEMPERATURES.TEN_TO_TWENTY,
      6: TEMPERATURES.TEN_TO_TWENTY,
      7: TEMPERATURES.TEN_TO_TWENTY,
      8: TEMPERATURES.TEN_TO_TWENTY,
      9: TEMPERATURES.TEN_TO_TWENTY,
      10: TEMPERATURES.TEN_TO_TWENTY,
      11: TEMPERATURES.TEN_TO_TWENTY,
    },
    name: 'Costa Rica',
  },
  MEXICO: {
    _id: '2',
    continent: CONTINENTS.NORTH_AMERICA,
    foodScore: 7,
    foodTypes: [FOOD_TYPES.MACDONALDS, FOOD_TYPES.MIDDLE_EASTERN],
    latLng: {
      lat: '0',
      lng: '0',
    },
    monthlyTemperatures: {
      0: TEMPERATURES.TEN_TO_TWENTY,
      1: TEMPERATURES.TEN_TO_TWENTY,
      2: TEMPERATURES.TEN_TO_TWENTY,
      3: TEMPERATURES.TEN_TO_TWENTY,
      4: TEMPERATURES.TEN_TO_TWENTY,
      5: TEMPERATURES.TEN_TO_TWENTY,
      6: TEMPERATURES.TEN_TO_TWENTY,
      7: TEMPERATURES.TEN_TO_TWENTY,
      8: TEMPERATURES.TEN_TO_TWENTY,
      9: TEMPERATURES.TEN_TO_TWENTY,
      10: TEMPERATURES.TEN_TO_TWENTY,
      11: TEMPERATURES.TEN_TO_TWENTY,
    },
    name: 'Mexico',
  },
};
