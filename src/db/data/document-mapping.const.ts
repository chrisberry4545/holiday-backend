import {
  ACTIVITY_CATEGORIES,
  COLLECTIONS,
  COST_RANGES,
  COUNTRIES,
  FLIGHT_TIMES,
  FOOD_TYPES,
  HOLIDAYS,
  TEMPERATURES,
} from './';

interface DocumentMapping {
  collectionName: string;
  data: object[];
}

const convertMapToArray = <T>(obj: {[key: string]: T}) => {
  const resultArray: T[] = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      resultArray.push(obj[prop]);
    }
  }
  return resultArray;
};

export const DOCUMENT_MAPPINGS: DocumentMapping[] = [{
  collectionName: COLLECTIONS.ACTIVITY_CATEGORIES,
  data: convertMapToArray(ACTIVITY_CATEGORIES),
}, {
  collectionName: COLLECTIONS.COST_RANGES,
  data: convertMapToArray(COST_RANGES),
}, {
  collectionName: COLLECTIONS.FOOD_TYPES,
  data: convertMapToArray(FOOD_TYPES),
}, {
  collectionName: COLLECTIONS.FLIGHT_TIMES,
  data: convertMapToArray(FLIGHT_TIMES),
}, {
  collectionName: COLLECTIONS.COUNTIRES,
  data: convertMapToArray(COUNTRIES),
}, {
  collectionName: COLLECTIONS.HOLIDAYS,
  data: convertMapToArray(HOLIDAYS),
}, {
  collectionName: COLLECTIONS.TEMPERATURE,
  data: convertMapToArray(TEMPERATURES),
}];
