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
  CHILD_FRIENDLY: {
    _id: '5',
    name: 'Child friendly',
  },
  CULTURE: {
    _id: '3',
    name: 'Culture',
  },
  NATURE: {
    _id: '6',
    name: 'Nature',
  },
  SPORTS: {
    _id: '4',
    name: 'Sports',
  },
};
