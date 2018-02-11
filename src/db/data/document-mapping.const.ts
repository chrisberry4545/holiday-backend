import {
  COLLECTIONS,
  FLIGHT_TIMES,
  FOOD_TYPES,
} from './';

interface DocumentMapping {
  collectionName: string;
  data: object[];
}

export const DOCUMENT_MAPPINGS: DocumentMapping[] = [{
  collectionName: COLLECTIONS.FOOD_TYPES,
  data: FOOD_TYPES,
}, {
  collectionName: COLLECTIONS.FLIGHT_TIMES,
  data: FLIGHT_TIMES,
}];
