import {
  ContinentInterface,
  CountryInterface,
  HolidayInterface,
  UserInputInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  COLLECTIONS,
  connectDb,
  readData,
} from './../db';

export const holidayResultsApi = () => ({

  filterHolidaysWithFoodType(
    holidays: HolidayInterface[],
    expectedFoodTypeIds: string[],
  ) {
    return holidays.filter((holiday) => {
      const holidayFoodTypeIds =
        holiday.country.foodTypes.map((foodType) => foodType._id);
      return expectedFoodTypeIds.some((id) => holidayFoodTypeIds.includes(id));
    });
  },

  getHoliday: (userInput: UserInputInterface): Promise<HolidayInterface[]> => {
    return connectDb().then((db) => {
      return readData<HolidayInterface>(
        db, COLLECTIONS.HOLIDAYS,
      ).then((holidays) => {
        return holidayResultsApi().filterHolidaysWithFoodType(
          holidays, userInput.selectedFoodTypeIds,
        );
      });
    });
  },
});
