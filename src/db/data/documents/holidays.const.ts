import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

import {
  COUNTRIES,
  FLIGHT_TIMES,
} from './';

export const HOLIDAYS: {[key: string]: HolidayInterface} = {
  CHINA: {
    _id: '3',
    activities: [],
    country: COUNTRIES.CHINA,
    flight: {
      cost: 100,
      flightTime: FLIGHT_TIMES.ONE_TO_TWO,
    },
    highlights: [{
      _id: '1',
      // tslint:disable-next-line
      imageUrl: 'http://static4.businessinsider.com/image/55c2095c2acae70f008bd411-3008-1504/great%20wall.jpg',
      title: 'The Great Wall of China',
    }, {
      _id: '2',
      // tslint:disable-next-line
      imageUrl: 'https://cdn.audleytravel.com/-/-/79/245092040066210246084134084120024103122218203223.jpg',
      title: 'The Terracotta Army',
    }],
    name: 'China holiday',
  },
  COSTA_RICA: {
    _id: '4',
    activities: [],
    country: COUNTRIES.COSTA_RICA,
    flight: {
      cost: 600,
      flightTime: FLIGHT_TIMES.ONE_TO_TWO,
    },
    highlights: [{
      _id: '3',
      // tslint:disable-next-line
      imageUrl: 'https://quostudenttravel.com/wp-content/uploads/2015/08/CostaRica_RainforestWaterfall-Bright.jpg',
      name: 'Rainforest',
    }],
    name: 'Costa Rica holiday',
  },
  MEXICO: {
    _id: '2',
    activities: [],
    country: COUNTRIES.MEXICO,
    flight: {
      cost: 500,
      flightTime: FLIGHT_TIMES.ONE_TO_TWO,
    },
    highlights: [{
      _id: '3',
      description: 'Mexican food is some of the best in the world',
      // tslint:disable-next-line
      imageUrl: 'http://del.h-cdn.co/assets/16/32/980x490/landscape-1470763907-jack-box-tacos.jpg',
      title: 'Amazing food',
    }],
    name: 'Mexico holiday',
  },
};
