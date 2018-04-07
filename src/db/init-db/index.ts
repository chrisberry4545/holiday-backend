import {
  connectDb,
  createDocuments,
  dropCollection,
  readData,
} from './../utilities';

import {
  COLLECTIONS,
  DOCUMENT_MAPPINGS,
} from './../data';

connectDb().then((db) => {
  DOCUMENT_MAPPINGS
  .filter((mapping) => (
    mapping.collectionName !== COLLECTIONS.COUNTIRES &&
    mapping.collectionName !== COLLECTIONS.HOLIDAYS
  )).forEach((mapping) => {
    dropCollection(db, mapping.collectionName).then(() => {
      createDocuments(db, mapping.data, mapping.collectionName);
    });
  });
});
