import {
  ActivityCategoryInterface,
} from '@chrisb-dev/holiday-shared-models';

export const ACTIVITY_CATEGORIES: {[key: string]: ActivityCategoryInterface} = {
  ADVENTURE: {
    _id: '1',
    name: 'Adventure',
  },
  BEACH: {
    _id: '2',
    name: 'Beach',
  },
  CULTURE: {
    _id: '3',
    name: 'Culture',
  },
  SPORTS: {
    _id: '4',
    name: 'Sports',
  },
};
