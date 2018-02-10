import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

import { Mongoose, Schema } from 'mongoose';

import {
  HolidayResultSchema,
  HolidayDbModel,
} from './../schemas';

export const holidayResultsApi = () => ({
  getHoliday: (): HolidayInterface[] => {
    const mongoose = new Mongoose();
    mongoose.connect('mongodb://127.0.0.1:27017/chris-test-db2').then((value) => {
      // console.log('connection done', value);

      //I am using your 'user' schema
      var userModel = HolidayDbModel;
      var User = mongoose.model('Holiday');
      var newUser = new User({
        country: 'test',
      });
      newUser.save((error, user) => {
        //your code
        console.log('saved yay!');
      });

      console.log('doing things');
      mongoose.connection.createCollection('olidays');
      const instance = new HolidayDbModel({
        country: 'test',
      });
      instance.update((err, result) => {
        console.log('saved', result);
      });

      HolidayDbModel.find((err, res) => {
        console.log('found thing', res);
      }).exec();
    });
    return [{
      country: {
        name: 'Costa Rica'
      },
    }, {
      country: {
        name: 'Mexico',
      },
    }] as HolidayInterface[];
  },
});
