import { Schema } from 'mongoose';

export const WorkspaceSchema = new Schema({
    name: { type: String, required: true },
    nameURL: { type: String, required: true, unique: true },
    removed: { type: Boolean, required: true, default: false },
});
