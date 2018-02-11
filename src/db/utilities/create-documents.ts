import {
  Db,
} from 'mongodb';

import {
  LOGGER,
} from './../../utilities';

export const createDocuments = (
  db: Db,
  data: object[],
  collectionName: string,
) => {
  return new Promise((resolve, reject) => {
    db.collection(collectionName)
    .insertMany(data, (insertError, res) => {
      if (insertError) {
        reject(insertError);
        throw insertError;
      }
      LOGGER.log(`Created collection ${collectionName}`);
      LOGGER.log(`${data.length} document inserted into ${collectionName}`);
      resolve(res);
    });
  });
};
