import {
  connectDb,
  readData,
  updateData,
} from './../utilities';

import {
  COLLECTIONS,
  DOCUMENT_MAPPINGS,
  FLIGHT_TIMES,
} from './../data';

import {
  FlightTimesInterface,
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

async function updateFields() {
  const db = await connectDb();
  const holidays = await readData<HolidayInterface>(db, COLLECTIONS.HOLIDAYS);

  const flightTimes = DOCUMENT_MAPPINGS
    .find((mapping) => (
      mapping.collectionName === COLLECTIONS.FLIGHT_TIMES
    )).data as FlightTimesInterface[];

  const holidaysWithUpdatedFlightTimes = holidays.map((holiday) => ({
    ...holiday,
    flight: {
      ...holiday.flight,
      flightTime: {
        ...flightTimes.find((dbFlightTime) => (
          dbFlightTime._id === holiday.flight.flightTime._id
        )),
      },
    },
  }));

  holidaysWithUpdatedFlightTimes.forEach((holiday) => {
    updateData(
      db,
      COLLECTIONS.HOLIDAYS,
      { _id: holiday._id },
      holiday,
    );
  });
}

updateFields();
