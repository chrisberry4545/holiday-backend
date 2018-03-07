import {
  Db,
} from 'mongodb';

import {
  ActivityCategoryInterface,
  ContinentInterface,
  CostRangeInterface,
  CountryInterface,
  FlightTimesInterface,
  FoodImportanceInterface,
  HolidayInterface,
  UserInputInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  COLLECTIONS,
  connectDb,
  readDataWithCache,
} from './../db';
export const holidayResultsApi = () => ({

  calculateCost(
    holiday: HolidayInterface,
  ): number {
    return holiday.flight.cost;
  },

  /**
   * If holiday is within cost range we should add 300 to the score.
   */
  async getCostScore(
    holiday: HolidayInterface,
    userInput: UserInputInterface,
    db: Db,
  ): Promise<number> {
    const costRangesRead =
      await readDataWithCache<CostRangeInterface>(
        db, COLLECTIONS.COST_RANGES,
      );
    const costRange = costRangesRead.find((possibleCostRange) => (
      possibleCostRange._id === userInput.selectedCostRangeId
    ));
    const holidayCost = holidayResultsApi().calculateCost(holiday);
    return holidayCost < costRange.maxCost ? 300 : 0;
  },

  /**
   * Give holiday 100 points for each matching activity
   */
  getActivityScore(
    holiday: HolidayInterface,
    userInput: UserInputInterface,
  ) {
    const holidayActivityCategoryIds =
    holiday.activities.map((activity) => activity._id);
    const matchingActivitiesCount = holidayActivityCategoryIds
      .filter((id) => (
        userInput.selectedActivityTypeIds.includes(id)
      )).length;

    return matchingActivitiesCount * 100;
  },

  /**
   * Maximum score increase of 300
   */
  async getFoodScore(
    holiday: HolidayInterface,
    userInput: UserInputInterface,
    db: Db,
  ) {
    const foodImportanceRead =
      await readDataWithCache<FoodImportanceInterface>(
        db, COLLECTIONS.COST_RANGES,
      );
    const userFoodImportance = foodImportanceRead.find((foodImportance) => (
      foodImportance._id === userInput.selectedFoodImportanceId
    ));
    const holidayFoodScoreOutOf100 = holiday.country.foodScore * 10;
    return holidayFoodScoreOutOf100 * (
      userFoodImportance.value || 1
    );
  },

  /**
   * Increases holiday score by 150 if temperature equals the one the user
   * wants.
   */
  getTemperatureScore(
    holiday: HolidayInterface,
    userInput: UserInputInterface,
  ) {
    const temperatureIdForMonthOfTravel =
      holiday.country.monthlyTemperatures[userInput.selectedMonthNumber];
    return temperatureIdForMonthOfTravel &&
      userInput.selectedTemperatureId === temperatureIdForMonthOfTravel._id
      ? 150 : 0;
  },

  /**
   * If holiday is within the flight time we should add 300 to the score
   */
  async getFlightTimesScore(
    holiday: HolidayInterface,
    userInput: UserInputInterface,
    db: Db,
  ) {
    const flightTimesRead =
      await readDataWithCache<FlightTimesInterface>(
        db, COLLECTIONS.FLIGHT_TIMES,
      );
    const userFlightTime = flightTimesRead.find((flighTime) => (
      flighTime._id === userInput.selectedFlightTimeId
    ));
    return userFlightTime &&
      holiday.flight.flightTime.timeMaxMinutes <
      userFlightTime.timeMaxMinutes
      ?
      300 : 0;
  },

  async scoreHoliday(
    holiday: HolidayInterface,
    userInput: UserInputInterface,
    db: Db,
  ): Promise<number> {
    const activityScore = holidayResultsApi().getActivityScore(
      holiday,
      userInput,
    );

    const temperatureScore = holidayResultsApi().getTemperatureScore(
      holiday,
      userInput,
    );

    return Promise.all([
      holidayResultsApi().getFoodScore(
        holiday,
        userInput,
        db,
      ),
      holidayResultsApi().getFlightTimesScore(
        holiday,
        userInput,
        db,
      ),
      holidayResultsApi().getCostScore(
        holiday,
        userInput,
        db,
      ),
    ]).then(([foodScore, flightScore, costScore]) => {
      return activityScore
        + temperatureScore
        + foodScore
        + flightScore
        + costScore;
    });
  },

  getHolidaysInOrderOfScore(
    holidays: HolidayInterface[],
    userInput: UserInputInterface,
    db: Db,
  ): Promise<HolidayInterface[]> {
    const promiseMap = holidays.map(async (holiday) => ({
      ...holiday,
      score: await holidayResultsApi().scoreHoliday(
        holiday,
        userInput,
        db,
      ),
    }));
    return Promise.all(promiseMap).then((results) => {
      return results.sort((a, b) => a.score > b.score ? -1 : 1);
    });
  },

  getHoliday: (userInput: UserInputInterface): Promise<HolidayInterface[]> => {
    return connectDb().then((db) => {
      return readDataWithCache<HolidayInterface>(
        db, COLLECTIONS.HOLIDAYS,
      ).then((holidays) => {
        return holidayResultsApi().getHolidaysInOrderOfScore(
          holidays,
          userInput,
          db,
        );
      });
    });
  },
});
