import {
  FormOptionsInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  POSSIBLE_FLIGHT_TIMES,
  POSSIBLE_FOOD_TYPES,
} from './../static-data';

export const userInputFormDataApi = () => ({
  getUserInputFormData: (): FormOptionsInterface => {
    return {
      possibleFlightTimes: POSSIBLE_FLIGHT_TIMES,
      possibleFoodTypes: POSSIBLE_FOOD_TYPES,
    };
  },
});
