import { Document } from 'mongoose';
import { ObjectID } from 'mongodb';

export interface User extends Document {
    email: string;
    password: string;
    fullName: string;
    displayName?: string;
    removed: boolean;
    workspace_id: ObjectID;
    areas: object[];
}
