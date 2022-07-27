import { Schema, model, connect } from 'mongoose';

/** Validators */
function isEmailValid(email: string) {
    const regexFilter = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regexFilter.test(email);
}

interface CustomerInterface {
    name: string
    email: string
    created_at: string
    skills: string[]
    cpf: string
    rg: string
}

const customerSchema = new Schema<CustomerInterface>({
    name: {
        type: String,
        required: [true, 'Invalid entries. Try again.'],
    },
    email: {
        type: String,
        required: [true, 'Invalid entries. Try again.'],
        validate: [isEmailValid, 'Invalid entries. Try again.'],
        unique: [true, 'Email already registered'],
    },
    created_at: {
        type: String,
        required: [true, 'Invalid entries. Try again.'],
    },
    skills: {
        type: Array,
        required: [true, 'Invalid entries. Try again.'],
    },
    cpf: {
        type: String,
        required: [true, 'Invalid entries. Try again.'],
    },
    rg: {
        type: String,
        required: [true, 'Invalid entries. Try again.'],
    },
});

const Customer = model<CustomerInterface>('Customer', customerSchema);

run().catch(err => console.log(err));

async function run() {
    await connect('mongodb+srv://dbTest:@Mayk2022@cluster0.zrv8j.mongodb.net/test');

    const customer = new Customer({
        name: 'Igor',
        email: 'igr.amaral@gmail.com',
        created_at: new Date(),
        skills: ['backEnd', 'aws cloud'],
        cpf: '111.222.333-44',
        rg: '111222333'
    });

    await customer.save();

    console.log(customer.email);
}