import {
  ActivityCategoryInterface,
  CostRangeInterface,
  FlightTimesInterface,
  FoodTypeInterface,
  FormOptionsInterface,
  TemperatureInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  ACTIVITY_CATEGORIES,
  COLLECTIONS,
  connectDb,
  COST_RANGES,
  FLIGHT_TIMES,
  FOOD_TYPES,
  readDataWithCache,
} from './../db';

export const userInputFormDataApi = () => ({
  getUserInputFormData: (): Promise<FormOptionsInterface> => {
    return connectDb().then((db) => {
      const activitiesCategoryRead =
        readDataWithCache<ActivityCategoryInterface>(
          db, COLLECTIONS.ACTIVITY_CATEGORIES,
        );
      const costRangesRead =
        readDataWithCache<CostRangeInterface>(db, COLLECTIONS.COST_RANGES);
      const flightTimeRead =
        readDataWithCache<FlightTimesInterface>(db, COLLECTIONS.FLIGHT_TIMES);
      const foodTypesRead =
        readDataWithCache<FoodTypeInterface>(db, COLLECTIONS.FOOD_TYPES);
      const temperaturesRead =
        readDataWithCache<TemperatureInterface>(db, COLLECTIONS.TEMPERATURE);


      return Promise.all([
        activitiesCategoryRead, costRangesRead,flightTimeRead,
        foodTypesRead, temperaturesRead,
      ])
      .then(([
        possibleActivities, possibleCostRanges,
        possibleFlightTimes, possibleFoodTypes,
        possibleTemperatures,
      ]) => {
        return {
          possibleActivities,
          possibleCostRanges,
          possibleFlightTimes,
          possibleFoodTypes,
          possibleTemperatures,
        };
      });
    });
  },
});
