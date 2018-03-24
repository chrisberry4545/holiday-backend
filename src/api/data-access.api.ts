import {
  ActivityCategoryInterface,
  ContinentInterface,
  CostRangeInterface,
  CountryInterface,
  FlightTimesInterface,
  FoodImportanceInterface,
  HolidayInterface,
  TemperatureInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  COLLECTIONS,
  connectDb,
  readDataWithCache,
} from './../db';

export const dataAccessApi = () => ({
  getGeneralData: <T>(collectionName: string): Promise<T[]> => {
    return connectDb().then((db) => {
      return readDataWithCache<T>(db, collectionName).then((data) => data);
    });
  },

  getAllData: (): Promise<{
    activityCategories: ActivityCategoryInterface[],
    continents: ContinentInterface[],
    costRanges: CostRangeInterface[],
    countries: CountryInterface[],
    flightTimes: FlightTimesInterface[],
    foodImportance: FoodImportanceInterface[],
    holidays: HolidayInterface[],
    temperature: TemperatureInterface[],
  }> => {
    const dataAccessApiInstance = dataAccessApi();
    return Promise.all([
      dataAccessApiInstance.getGeneralData<ActivityCategoryInterface>(
        COLLECTIONS.ACTIVITY_CATEGORIES,
      ),
      dataAccessApiInstance.getGeneralData<ContinentInterface>(
        COLLECTIONS.CONTINENTS,
      ),
      dataAccessApiInstance.getGeneralData<CostRangeInterface>(
        COLLECTIONS.COST_RANGES,
      ),
      dataAccessApiInstance.getGeneralData<CountryInterface>(
        COLLECTIONS.COUNTIRES,
      ),
      dataAccessApiInstance.getGeneralData<FlightTimesInterface>(
        COLLECTIONS.FLIGHT_TIMES,
      ),
      dataAccessApiInstance.getGeneralData<FoodImportanceInterface>(
        COLLECTIONS.FOOD_IMPORTANCE,
      ),
      dataAccessApiInstance.getGeneralData<HolidayInterface>(
        COLLECTIONS.HOLIDAYS,
      ),
      dataAccessApiInstance.getGeneralData<TemperatureInterface>(
        COLLECTIONS.TEMPERATURE,
      ),
    ]).then(([
      activityCategories,
      continents,
      costRanges,
      countries,
      flightTimes,
      foodImportance,
      holidays,
      temperature,
    ]) => {
      return {
        activityCategories,
        continents,
        costRanges,
        countries,
        flightTimes,
        foodImportance,
        holidays,
        temperature,
      };
    });
  },
});
