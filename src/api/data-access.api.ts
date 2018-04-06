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
  addData,
  COLLECTIONS,
  connectDb,
  readDataWithCache,
  updateData,
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

  saveHolidayData: (holidayData: HolidayInterface): Promise<void> => {
    return connectDb().then((db) => {
      return updateData(
        db,
        COLLECTIONS.HOLIDAYS,
        { _id: holidayData._id },
        holidayData,
      );
    });
  },

  createNewHoliday: (holiday: HolidayInterface): Promise<void> => {
    return connectDb().then((db) => {
      return addData(
        db,
        COLLECTIONS.HOLIDAYS,
        holiday,
      );
    });
  },

  saveCountryData: (countryData: CountryInterface): Promise<void> => {
    return connectDb().then((db) => {
      return updateData(
        db,
        COLLECTIONS.COUNTIRES,
        { _id: countryData._id },
        countryData,
      );
    });
  },

  createNewCountry: (countryData: CountryInterface): Promise<void> => {
    return connectDb().then((db) => {
      return addData(
        db,
        COLLECTIONS.COUNTIRES,
        countryData,
      );
    });
  },
});
