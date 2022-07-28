import express, { Router } from "express"
import { CustomerPresenter } from "./Presenters/CustomerPresenter"

const router = Router()

const customerPresenter = new CustomerPresenter()

router.get("/api/customers", customerPresenter.index)
router.post("/api/customers", customerPresenter.store)

router.get("/api/generate-xls/customers", customerPresenter.generateXls)

export { router }