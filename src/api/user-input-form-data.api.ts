import {
  FormOptionsInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  POSSIBLE_FOOD_TYPES,
  POSSIBLE_FLIGHT_TIMES,
} from './../static-data';

export const userInputFormDataApi = () => ({
  getUserInputFormData: (): FormOptionsInterface => {
    return {
      possibleFoodTypes: POSSIBLE_FOOD_TYPES,
      possibleFlightTimes: POSSIBLE_FLIGHT_TIMES,
    };
  }
});
