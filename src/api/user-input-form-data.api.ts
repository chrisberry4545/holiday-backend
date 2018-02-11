import {
  FlightTimesInterface,
  FoodTypeInterface,
  FormOptionsInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  COLLECTIONS,
  connectDb,
  readData,
} from './../db';

export const userInputFormDataApi = () => ({
  getUserInputFormData: (): Promise<FormOptionsInterface> => {
    return connectDb().then((db) => {
      const flightTimeRead =
        readData<FlightTimesInterface>(db, COLLECTIONS.FLIGHT_TIMES);
      const foodTypesRead =
        readData<FoodTypeInterface>(db, COLLECTIONS.FOOD_TYPES);

      return Promise.all([flightTimeRead, foodTypesRead])
      .then(([flightTimes, foodTypes]) => {
        return {
          possibleFlightTimes: flightTimes,
          possibleFoodTypes: foodTypes,
        };
      });
    });
  },
});
