import {
  Db,
} from 'mongodb';

import {
  LOGGER,
} from './../../utilities';

export const readData = <T>(
  db: Db,
  collectionName: string,
): Promise<T[]> => {
  return new Promise((resolve) => {
    db.collection(collectionName).find({}).toArray((err, results) => {
      LOGGER.log('got things', results);
      resolve(results);
    });
  });
};
