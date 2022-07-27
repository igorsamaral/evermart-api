import { Request, Response } from 'express'

import { XlsGeneratorService } from '../Services/export/XlsGeneratorService'

class CustomerPresenter {
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

export { CustomerPresenter }