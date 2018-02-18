import {
  Db,
} from 'mongodb';

import {
  readData,
} from './';

import {
  DOCUMENT_MAPPINGS,
} from './..';

export const readDataWithCache = <T>(
  db: Db,
  collectionName: string,
): Promise<T[]> => {
  const cachedData = DOCUMENT_MAPPINGS.find((mapping) => (
    mapping.collectionName === collectionName
  ));
  return cachedData ? new Promise((resolve) => {
    resolve(cachedData.data as any);
  })
  :
  readData(db, collectionName);
};
