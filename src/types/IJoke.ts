import { Document, ObjectId } from "mongoose";

export default interface IJoke extends Document {
    _id: string;
    title: string;
    answer?: string;
    category: string;
    createdAt?: string;
    updatedAt?: string;
} 