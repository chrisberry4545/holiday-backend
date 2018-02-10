import {
  CountryInterface,
  ContinentInterface,
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
  foodTypeId: '1',
  countryId: '1',
}, {
  foodTypeId: '1',
  countryId: '1',
}, {
  foodTypeId: '2',
  countryId: '2',
}, {
  foodTypeId: '2',
  countryId: '3',
}, {
  foodTypeId: '3',
  countryId: '1',
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
    name: holidayDb.name,
    id: holidayDb.id,
    foodTypes,
  };
};

export const holidayResultsApi = () => ({
  getHoliday: (userInput: UserInputInterface): HolidayInterface[] => {
    console.log('Received user input', userInput);
    const allHolidays: HolidayDBInterface[] = [{
      id: '1',
      countryId: '1',
      name: 'Costa Rica Holiday',
    }, {
      id: '2',
      countryId: '2',
      name: 'Mexico Holiday',
    }, {
      id: '3',
      countryId: '3',
      name: 'China Holiday',
    }];
    const populatedHolidays = allHolidays.map(hydrateHolidayDb);

    return populatedHolidays.filter((holiday) => {
      const holidayFoodTypeIds = holiday.foodTypes
        .map((foodType) => foodType.id);
      return userInput.selectedFoodTypeIds.some((foodTypeId) => (
        holidayFoodTypeIds.includes(foodTypeId)
      ))
    });
  },
});
