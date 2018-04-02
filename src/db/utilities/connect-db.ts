import {
  Db,
  MongoClient,
} from 'mongodb';

import * as dotenv from 'dotenv';
dotenv.config();

const url = `mongodb://` +
  `${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}` +
  `@ds123799.mlab.com:23799/holidays`;

const DB_NAME = 'holidays';

export const connectDb = (): Promise<Db> => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (connectError, db) => {
      if (connectError) {
        reject(connectError);
        throw connectError;
      }
      resolve(db.db(DB_NAME));
    });
  });
};
