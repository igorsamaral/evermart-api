import { CustomerDTO } from "../../Entities/types/CustomerDTO"

class CustomerService {
    async create({ name, email, created_at, skills, cpf, rg } : CustomerDTO) {
        return {}
    }
}

export { CustomerService }