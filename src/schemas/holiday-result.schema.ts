import { Document, Schema, Model, model} from 'mongoose';
import {
  HolidayInterface,
} from '@chrisb-dev/holiday-shared-models';

export interface HolidayModel extends HolidayInterface, Document {
  id: string;
}
export const HolidayResultSchema: Schema = new Schema({
  country: String,
});
// HolidayResultSchema.pre('save', (next) => {
//   const now = new Date();
//   if (!this.createdAt) {
//     this.createdAt = now;
//   }
//   next();
// });

export const HolidayDbModel: Model<HolidayModel> = model<HolidayModel>(
  'Holiday', HolidayResultSchema,
);
