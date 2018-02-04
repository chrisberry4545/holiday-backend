import {
  HolidayResultInterface,
} from '@chrisb-dev/holiday-shared-models';

export const holidayResultsApi = () => ({
  getHoliday: (): HolidayResultInterface[] => {
    return [{
      country: 'Costa Rica',
    }, {
      country: 'Mexico',
    }];
  },
});
