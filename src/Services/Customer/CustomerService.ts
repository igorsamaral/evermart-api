import Customer from "../../Entities/Customer"
import { CustomerDTO } from "../../Entities/types/CustomerDTO"

export default class CustomerService {
    async getAll() {
        return await Customer.find()
    }

    async create({ name, email, skills, cpf, rg } : CustomerDTO) {
        const customer = Customer.create({ name, email, skills, cpf, rg })
        return customer
    }
}
