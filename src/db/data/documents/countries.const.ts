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
    facts: [{
      _id: '1',
      name: 'China is the highest population of any country in the world',
    }, {
      _id: '2',
      name: 'China has 4 times as many people as the USA',
    }],
    foodScore: 10,
    foodTypes: [FOOD_TYPES.MACDONALDS, FOOD_TYPES.SPICY],
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
    continent: CONTINENTS.CENTRAL_AMERICA,
    facts: [{
      _id: '3',
      name: 'Sloths live here',
    }, {
      _id: '4',
      name: 'Costa ricans calls themselves Ticos and Ticas',
    }, {
      _id: '5',
      name: 'The average life expectancy is 77 years. This is one of' +
      ' the highest in the world',
    }, {
      _id: '6',
      name: 'Costa Rica has no standing army',
    }],
    foodScore: 7,
    foodTypes: [FOOD_TYPES.MACDONALDS, FOOD_TYPES.MEDITERRANEAN],
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
    continent: CONTINENTS.CENTRAL_AMERICA,
    facts: [{
      _id: '7',
      name: 'The offical name for Mexico is the United Mexican States',
    }],
    foodScore: 7,
    foodTypes: [FOOD_TYPES.MACDONALDS, FOOD_TYPES.MIDDLE_EASTERN],
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
