import { Schema } from 'mongoose';
import { ObjectID } from 'bson';

export const AreaSchema = new Schema({
    name: { type: String, required: true },
    removed: { type: Boolean, required: true, default: false },
    workspace_id: { type: ObjectID, required: true, index: { background: true } },
});
