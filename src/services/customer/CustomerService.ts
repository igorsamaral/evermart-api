interface CustomerRequestInterface {
    name: string
    email: string
    created_at: string
    skills: string[]
    cpf: string
    rg: string
}

class CustomerService {
    async create({ name, email, created_at, skills, cpf, rg } : CustomerRequestInterface) {
        return {}
    }
}

export { CustomerService }