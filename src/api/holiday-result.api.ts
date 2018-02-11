import {
  ContinentInterface,
  CountryInterface,
  HolidayInterface,
  UserInputInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  HolidayDBInterface,
} from './../models';

const centralAmerica: ContinentInterface = {
  id: '1',
  name: 'Central America',
};
const asia: ContinentInterface = {
  id: '2',
  name: 'Asia',
};

const countries: CountryInterface[] = [{
  continent: centralAmerica,
  id: '1',
  name: 'Costa Rica',
}, {
  continent: centralAmerica,
  id: '2',
  name: 'Mexico',
}, {
  continent: asia,
  id: '3',
  name: 'China',
}];

const possibleFoodTypes = [{
  id: '1',
  name: 'Spicy',
}, {
  id: '2',
  name: 'Mediterranean',
}, {
  id: '3',
  name: 'Middle Eastern',
}];

const foodTypesToCountryMap = [{
  countryId: '1',
  foodTypeId: '1',
}, {
  countryId: '1',
  foodTypeId: '1',
}, {
  countryId: '2',
  foodTypeId: '2',
}, {
  countryId: '3',
  foodTypeId: '2',
}, {
  countryId: '1',
  foodTypeId: '3',
}];

const hydrateHolidayDb = (holidayDb: HolidayDBInterface): HolidayInterface => {
  const foodTypeIdsForCountry = foodTypesToCountryMap
    .filter((foodTypeToCountry) => (
      foodTypeToCountry.countryId === holidayDb.countryId
    )).map((foodTypeToCountry) => foodTypeToCountry.foodTypeId);
  const foodTypes = possibleFoodTypes.filter((foodType) => (
    foodTypeIdsForCountry.includes(foodType.id)
  ));
  return {
    activities: [],
    country: countries.find((country) => country.id === holidayDb.countryId),
    foodTypes,
    id: holidayDb.id,
    name: holidayDb.name,
  };
};

export const holidayResultsApi = () => ({
  getHoliday: (userInput: UserInputInterface): HolidayInterface[] => {
    const allHolidays: HolidayDBInterface[] = [{
      countryId: '1',
      id: '1',
      name: 'Costa Rica Holiday',
    }, {
      countryId: '2',
      id: '2',
      name: 'Mexico Holiday',
    }, {
      countryId: '3',
      id: '3',
      name: 'China Holiday',
    }];
    const populatedHolidays = allHolidays.map(hydrateHolidayDb);

    return populatedHolidays.filter((holiday) => {
      const holidayFoodTypeIds = holiday.foodTypes
        .map((foodType) => foodType.id);
      return userInput.selectedFoodTypeIds.some((foodTypeId) => (
        holidayFoodTypeIds.includes(foodTypeId)
      ));
    });
  },
});
