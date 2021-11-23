import EmployeeService from "../services/employeeService.js";

let employeService = new EmployeeService();
employeService.load();
console.log(employeService.employeeRepository.employees);
// console.log(employeService.getEmployeesSorted());
