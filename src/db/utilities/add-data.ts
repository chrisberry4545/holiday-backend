import {
  Db,
} from 'mongodb';

import {
  LOGGER,
} from './../../utilities';

export const addData = <T>(
  db: Db,
  collectionName: string,
  newObject: T,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.collection(collectionName).insert(
      newObject,
      undefined,
      (error) => {
        if (error) {
          LOGGER.log(`Error when inserting document:`, error);
          reject();
        } else {
          LOGGER.log(`Inserted document into ${collectionName}`);
          resolve();
        }
      },
    );
  });
};
