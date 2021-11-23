import UserService from "./userService.js";
import { users } from "../data/users.js";
import DataError from "../results/dataError.js";
import CustomerValidator from "../validationRules/customerValidator.js";
import CustomerRepository from "../repositories/customerRepository.js";
export default class CustomerService {
  constructor(loggerService) {
    this.loggerService = loggerService;
    this.customerRepository = new CustomerRepository();
    this.customerValidator = new CustomerValidator();
  }

  load() {
    for (const user of users) {
      if (this.customerValidator.checkTypeUser(user)) {
        this.customerRepository.add(user);
      } else {
        this.customerValidator.errors.push(
          new DataError("Wrong user type", user)
        );
      }
    }
  }

  add(user) {
    if (
      this.customerValidator.checkTypeUser(user) &&
      !this.customerValidator.checkUserValidityForErrors(user) &&
      !this.customerValidator.checkUserAge(user)
    ) {
      this.customerRepository.add(user);
    } else {
      new DataError("This user can not be added. Wrong user type", user);
    }
    this.loggerService.log(user);
  }
  listCustomers() {
    return this.customerRepository.listCustomers();
  }
  getCustomersById(id) {
    return this.customerRepository.getCustomersById(id);
  }

  getCustomersSorted() {
    return this.customers.sort((customer1, customer2) => {
      if (customer1.firstName > customer2.firstName) {
        return 1;
      } else if (customer1.firstName === customer2.firstName) {
        return 0;
      } else {
        return -1;
      }
    });
  }
}
