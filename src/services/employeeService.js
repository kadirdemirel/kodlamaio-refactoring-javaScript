import UserService from "./userService.js";
import { users } from "../data/users.js";
import DataError from "../results/dataError.js";
import EmployeeValidator from "../validationRules/employeeValidation.js";
import EmployeeRepository from "../repositories/employeeRepository.js";

export default class EmployeeService {
  constructor(loggerService) {
    this.loggerService = loggerService;
    this.employeeRepository = new EmployeeRepository();
    this.employeeValidator = new EmployeeValidator();
  }

  load() {
    for (const user of users) {
      if (this.employeeValidator.checkTypeUser(user)) {
        this.employeeRepository.add(user);
      } else {
        this.employeeValidator.errors.push(
          new DataError("Wrong user type", user)
        );
      }
    }
  }

  add(user) {
    if (
      this.employeeValidator.checkTypeUser(user) &&
      !employeeValidator.checkUserValidityForErrors(user) &&
      !this.employeeValidator.checkUserAge(user)
    ) {
      this.employeeRepository.add(user);
    } else {
      new DataError("This user can not be added. Wrong user type", user);
    }
    this.loggerService.log(user);
  }
  listEmployees() {
    return this.employeeRepository.listEmployees();
  }
  getEmployeesById(id) {
    return this.employeeRepository.getEmployeesById(id);
  }

  getEmployeesSorted() {
    return this.employees.sort((employee1, employee2) => {
      if (employee1.firstName > employee2.firstName) {
        return 1;
      } else if (employee1.firstName === employee2.firstName) {
        return 0;
      } else {
        return -1;
      }
    });
  }
}
