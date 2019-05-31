import { Document } from 'mongoose';
import { ObjectID } from 'mongodb';

export interface Area extends Document {
    name: string;
    removed: boolean;
    workspace_id: ObjectID;
}
