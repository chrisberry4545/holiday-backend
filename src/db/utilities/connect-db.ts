import {
  Db,
  MongoClient,
} from 'mongodb';

const url = 'mongodb://localhost:27017/';

const DB_NAME = 'holiday-db';

export const connectDb = (): Promise<Db> => {
  return new Promise((resolve, reject) => {
    // Temporarily go without DB
    resolve(null);
    // MongoClient.connect(url, (connectError, db) => {
    //   if (connectError) {
    //     reject(connectError);
    //     throw connectError;
    //   }
    //   resolve(db.db(DB_NAME));
    // });
  });
};
