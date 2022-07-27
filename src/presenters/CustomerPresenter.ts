import { Request, Response } from 'express'
import { XlsGeneratorService } from '../services/export/XlsGeneratorService'

class CustomerController {
    async index(request: Request, response: Response) {
        return response.json({})
    }

    async store(request: Request, response: Response) {
        return response.json({})
    }

    async generateXls(request: Request, response: Response) {
        return response.json({})
    }
}

export { CustomerController }