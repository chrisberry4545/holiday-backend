import {
  connectDb,
  createDocuments,
  dropCollection,
  readData,
} from './../utilities';

import {
  DOCUMENT_MAPPINGS,
} from './../data';

connectDb().then((db) => {
  DOCUMENT_MAPPINGS.forEach((mapping) => {
    dropCollection(db, mapping.collectionName).then(() => {
      createDocuments(db, mapping.data, mapping.collectionName);
    });
  });
});
