import { Request, Response } from 'express'
import CustomerService from '../Services/Customer/CustomerService';
import XlsGeneratorService from '../Services/Export/XlsGeneratorService'

class CustomerPresenter {
    async index(request: Request, response: Response) {
        try {
            const customerService = new CustomerService()
            const customers = await customerService.getAll()

            return response.json(customers)
        } catch (error) {
            console.error(error)
        }
    }

    async store(request: Request, response: Response) {
        const data = request.body

        try {
            const customerService = new CustomerService()
            const customer = await customerService.create(data)

            return response.json(customer)
        } catch (error) {
            console.error(error)
        }
    }

    async generateXls(request: Request, response: Response) {
        const xlsGeneratorService = new XlsGeneratorService()
        const customerService = new CustomerService()

        const customers = await customerService.getAll()

        const columns = [
            'id',
            'name',
            'email',
            'skills',
            'cpf',
            'rg',
            'created_at',
        ]

        xlsGeneratorService.run('Planilha de pessoas', columns, customers)

        return response.json({message: "Arquivo XLS gerado com sucesso"})
    }
}

export { CustomerPresenter }