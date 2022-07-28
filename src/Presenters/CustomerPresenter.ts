import { Request, Response } from 'express'
import CustomerService from '../Services/Customer/CustomerService';
import { XlsGeneratorService } from '../Services/Export/XlsGeneratorService'

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
        return response.json({})
    }
}

export { CustomerPresenter }