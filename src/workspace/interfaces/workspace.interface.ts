import { Document } from 'mongoose';

export interface Workspace extends Document {
    name: string;
    nameURL: string;
    removed: boolean;
}
