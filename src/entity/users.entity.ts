import { model, Schema, Types } from 'mongoose'
export interface User {
    account: String;
    firstName: String;
    lastName: String;
    email: String;
    encryptedPassword: String;
    role: String;
}
  
export const usersSchema = new Schema<User>({
    account: { type: String,  required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: false },
    encryptedPassword: { type: String, required: true },
    role: { type: String, enum: ["admin", "restricted"], required: true },
}, {
    versionKey: false,
    timestamps: true,
    autoCreate: true
})

export const Users = model<User>("users", usersSchema);
