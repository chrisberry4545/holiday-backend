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
  TemperatureInterface,
  UserInputInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  BADGES,
  COLLECTIONS,
  connectDb,
  readDataWithCache,
} from './../db';

const maxScorePerSection = 1000;

export const holidayResultsApi = () => ({

  getBadgeFromScore(
    score: number,
  ) {
    return score === maxScorePerSection ?
      BADGES.PERFECT
      :
      score >= maxScorePerSection * 2 / 3
      ?
      BADGES.GOOD
      :
      null;
  },

  calculateCost(
    holiday: HolidayInterface,
  ): number {
    return holiday.flight.cost;
  },

  /**
   * If holiday is within cost range we should give a maximum score to the
   * score. Otherwise 0.
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
    return costRange && holidayCost < costRange.maxCost ?
      maxScorePerSection
      :
      0;
  },

  /**
   * Give holiday points for each matching activity.
   * Maximum score if more than 50% of total activities matched.
   */
  async getActivityScore(
    holiday: HolidayInterface,
    userInput: UserInputInterface,
    db: Db,
  ) {
    const activityReads =
      await readDataWithCache<FoodImportanceInterface>(
        db, COLLECTIONS.COST_RANGES,
      );
    const holidayActivityCategoryIds =
    holiday.activities.map((activity) => activity._id);
    const matchingActivitiesCount = holidayActivityCategoryIds
      .filter((id) => (
        userInput.selectedActivityTypeIds.includes(id)
      )).length;
    const totalActivities = activityReads.length;
    const percentOfTotalActivitesMatched =
      matchingActivitiesCount / totalActivities;
    const maxActivitiesToMatch = 2;

    return Math.min(
      percentOfTotalActivitesMatched * maxActivitiesToMatch, 1,
    ) * maxScorePerSection;
  },

  /**
   * Gets a score out of max score for the food
   */
  async getFoodScore(
    holiday: HolidayInterface,
    userInput: UserInputInterface,
    db: Db,
  ) {
    const foodImportanceRead =
      await readDataWithCache<FoodImportanceInterface>(
        db, COLLECTIONS.FOOD_IMPORTANCE,
      );
    const userFoodImportance = foodImportanceRead.find((foodImportance) => (
      foodImportance._id === userInput.selectedFoodImportanceId
    ));
    const maxFoodScore = 10;
    const maxFoodImportance = Math.max(
      ...foodImportanceRead.map((foodImportance) => foodImportance.value),
    );

    const countryFoodPercent = holiday.country.foodScore / maxFoodScore;
    const userFoodRatingPercent = (
      (userFoodImportance && userFoodImportance.value) || 1
    ) / maxFoodImportance;

    return countryFoodPercent * userFoodRatingPercent * maxScorePerSection;
  },

  /**
   * Increases holiday score by amount if temperature equals the one the user
   * wants.
   */
  async getTemperatureScore(
    holiday: HolidayInterface,
    userInput: UserInputInterface,
    db: Db,
  ) {
    const temperaturesRead =
      await readDataWithCache<TemperatureInterface>(
        db,
        COLLECTIONS.TEMPERATURE,
      );
    const temperatureIdForMonthOfTravel =
      holiday.country.monthlyTemperatures[userInput.selectedMonthNumber];
    const userSelectedTemperature = temperaturesRead.find((temperature) => (
      temperature._id === userInput.selectedTemperatureId
    ));

    return temperatureIdForMonthOfTravel && userSelectedTemperature &&
      userSelectedTemperature.minValue >= temperatureIdForMonthOfTravel.minValue
      ?
      maxScorePerSection
      :
      0;
  },

  /**
   * If holiday is within the flight time we should add the max score
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
      holiday.flight.flightTime.timeMaxMinutes < userFlightTime.timeMaxMinutes
      ?
      maxScorePerSection
      :
      0;
  },

  async scoreHoliday(
    holiday: HolidayInterface,
    userInput: UserInputInterface,
    db: Db,
  ) {
    return Promise.all([
      holidayResultsApi().getActivityScore(
        holiday,
        userInput,
        db,
      ),
      holidayResultsApi().getTemperatureScore(
        holiday,
        userInput,
        db,
      ),
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
    ]).then(([
      activityScore,
      temperatureScore,
      foodScore,
      flightScore,
      costScore,
    ]) => {
      const getBadgeFromScore = holidayResultsApi().getBadgeFromScore;
      return {
        badges: {
          activity: getBadgeFromScore(activityScore),
          cost: getBadgeFromScore(costScore),
          flight: getBadgeFromScore(flightScore),
          food: getBadgeFromScore(foodScore),
          temperature: getBadgeFromScore(temperatureScore),
        },
        score: activityScore
          + temperatureScore
          + foodScore
          + flightScore
          + costScore,
      };
    });
  },

  getHolidaysInOrderOfScore(
    holidays: HolidayInterface[],
    userInput: UserInputInterface,
    db: Db,
  ): Promise<HolidayInterface[]> {
    const promiseMap = holidays.map(async (holiday) => {
      const {
        badges,
        score,
      } = await holidayResultsApi().scoreHoliday(
        holiday,
        userInput,
        db,
      );
      return {
        ...holiday,
        badges,
        score,
      };
    });
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
