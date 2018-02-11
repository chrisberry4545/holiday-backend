import {
  Db,
} from 'mongodb';

import {
  LOGGER,
} from './../../utilities';

export const dropCollection = (
  db: Db,
  collectionName: string,
) => {
  return new Promise((resolve, reject) => {
    db.dropCollection(collectionName, () => {
      LOGGER.log(`Dropping collection ${collectionName}...`);
      resolve();
    });
  });
};
