import {
  HolidayResultInterface,
} from '@chrisb-dev/holiday-shared-models';

export const HOLIDAY_RESULTS = () => ({
  getHoliday: (): HolidayResultInterface[] => {
    return [{
      country: 'Costa Rica',
    }]
  },
});
