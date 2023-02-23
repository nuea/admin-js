import { model, Schema, Types } from 'mongoose'
export interface User {
    name: String;
    street: String;
    number: Number;
    postcode: String;
}

const citiesSchema = new Schema<User>({
    name: { type: String, require: true, },
    street: String,
    number: Number,
    postcode: String,
});

export const Cities = model('cities', citiesSchema);
