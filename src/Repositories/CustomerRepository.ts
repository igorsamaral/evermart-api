import { Customer } from "../Entities/Customer";
import { CustomerDTO } from "../Entities/types/CustomerDTO";

export class CustomerRepository {
  createCustomer(data: CustomerDTO) {
    return Customer.create({});
  }
}
