import {
  Db,
} from 'mongodb';

import {
  LOGGER,
} from './../../utilities';

export const writeData = <T>(
  db: Db,
  collectionName: string,
  whereObject: { _id: string },
  newObject: T,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.collection(collectionName).update(
      whereObject,
      newObject,
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
