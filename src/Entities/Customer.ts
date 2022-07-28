import mongoose, { Schema } from 'mongoose';
import CustomerInterface from './types/CustomerInterface';

const timeSince = (date: Date) => {
    return date.toLocaleString()
}

const CustomerSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    skills: { type: [String], required: true },
    cpf: { type: String, required: true },
    rg: { type: String, required: true },
    created_at: { type: Date, required: true, get: (date: Date) => timeSince(date) },
}, {
    timestamps: true,
    toJSON: { getters: true, virtuals: true },
    versionKey: false
});

export default mongoose.model<CustomerInterface>('Customer', CustomerSchema);
