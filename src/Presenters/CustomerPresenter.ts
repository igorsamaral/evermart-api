import { Request, Response } from 'express'
import { CustomerService } from '../Services/Customer/CustomerService'
import { XlsGeneratorService } from '../Services/Export/XlsGeneratorService'

class CustomerPresenter {
    private customerService: CustomerService

    constructor() {
        this.customerService = new CustomerService()
    }

    async index(request: Request, response: Response) {
        return response.json({})
    }

    async store(request: Request, response: Response) {
        const data = request.body

        try {
            const customer = await this.customerService.create(data)
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