import { Schema } from 'mongoose';
import { ObjectID } from 'mongodb';

export const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    displayName: { type: String },
    removed: { type: Boolean, default: false, required: true },
    workspace_id: { type: ObjectID, required: true },
    areas: { type: Array<object>(), default: [] },
});
