import { ObjectID } from 'bson';
import { Document } from 'mongoose';

export interface Area extends Document {
    name: string;
    removed: boolean;
    workspace_id: ObjectID;
}
