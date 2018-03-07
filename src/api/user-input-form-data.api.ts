import {
  ActivityCategoryInterface,
  CostRangeInterface,
  FlightTimesInterface,
  FoodImportanceInterface,
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
      const foodImportanceRead =
        readDataWithCache<FoodImportanceInterface>(
          db, COLLECTIONS.FOOD_IMPORTANCE,
        );
      const temperaturesRead =
        readDataWithCache<TemperatureInterface>(db, COLLECTIONS.TEMPERATURE);

      return Promise.all([
        activitiesCategoryRead, costRangesRead, flightTimeRead,
        foodImportanceRead, temperaturesRead,
      ])
      .then(([
        possibleActivities, possibleCostRanges,
        possibleFlightTimes, possibleFoodImportantOptions,
        possibleTemperatures,
      ]) => {
        return {
          possibleActivities,
          possibleCostRanges,
          possibleFlightTimes,
          possibleFoodImportantOptions,
          possibleTemperatures,
        };
      });
    });
  },
});
