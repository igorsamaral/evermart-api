import mongoose, { Schema } from 'mongoose';
import CustomerInterface from './types/CustomerInterface';

const CustomerSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    skills: { type: [String], required: true },
    cpf: { type: String, required: true },
    rg: { type: String, required: true },
    created_at: { type: String, required: true },
});

export default mongoose.model<CustomerInterface>('Customer', CustomerSchema);
