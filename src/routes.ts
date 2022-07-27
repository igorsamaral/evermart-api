import express, { Router } from "express"
import { CustomerPresenter } from "./Presenters/CustomerPresenter"

const router = Router()

const customerPresenter = new CustomerPresenter()

router.get("/customers", customerPresenter.index)
router.post("/customers", customerPresenter.store)

router.get("/generate-xls/customers", customerPresenter.generateXls)

export { router }