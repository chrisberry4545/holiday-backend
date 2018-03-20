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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      // tslint:disable-next-line
      imageUrl: 'http://static4.businessinsider.com/image/55c2095c2acae70f008bd411-3008-1504/great%20wall.jpg',
      title: 'The Great Wall of China',
    }, {
      _id: '2',
      // tslint:disable-next-line
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      // tslint:disable-next-line
      imageUrl: 'https://cdn.audleytravel.com/-/-/79/245092040066210246084134084120024103122218203223.jpg',
      title: 'The Terracotta Army',
    }],
    name: 'China',
    // tslint:disable-next-line
    mainImageUrl: 'https://lonelyplanetwp.imgix.net/2017/03/Shanghai_for_free-abe6e2eb510b.jpg?crop=entropy&fit=crop&h=421&sharp=10&vib=20&w=748',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      // tslint:disable-next-line
      imageUrl: 'https://quostudenttravel.com/wp-content/uploads/2015/08/CostaRica_RainforestWaterfall-Bright.jpg',
      title: 'Rainforest',
    }],
    name: 'Costa Rica',
    // tslint:disable-next-line
    mainImageUrl: 'https://www.abercrombiekent.com/-/media/ak/journeys/base-images/costa_rica/2017-tm-costa-rica-small.jpg?h=370&w=590&la=en&hash=9957D6B00537617DFDB11B68E8ED980C57662CC9',
  },
  MEXICO: {
    _id: '2',
    activities: [],
    country: COUNTRIES.MEXICO,
    flight: {
      cost: 1000,
      flightTime: FLIGHT_TIMES.ONE_TO_TWO,
    },
    highlights: [{
      _id: '3',
      // tslint:disable-next-line
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      // tslint:disable-next-line
      imageUrl: 'http://del.h-cdn.co/assets/16/32/980x490/landscape-1470763907-jack-box-tacos.jpg',
      title: 'Amazing food',
    }],
    name: 'Mexico',
    // tslint:disable-next-line
    mainImageUrl: 'https://travelhealthpro.org.uk/media_lib/mlib-uploads/full/Mexico.jpg',
  },
};
