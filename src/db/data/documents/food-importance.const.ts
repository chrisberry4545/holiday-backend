import {
  FoodImportanceInterface,
} from '@chrisb-dev/holiday-shared-models';

export const FOOD_IMPORTANCE: {[key: string]: FoodImportanceInterface} = {
  NOT_IMPORTANT: {
    _id: '1',
    name: 'Not important',
    value: 0,
  },
  SOMEWHAT_IMPORTANT: {
    _id: '2',
    name: `I wouldn't go somewhere with bad food`,
    value: 1,
  },
  VERY_IMPORTANT: {
    _id: '3',
    name: `I only go on holiday for the food`,
    value: 2,
  },
};
