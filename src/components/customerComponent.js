import CustomerRepository from "../repositories/customerRepository.js";
import CustomerService from "../services/customerService.js";

let customerService = new CustomerService();
let customerRepository = new CustomerRepository();
customerService.load();
console.log(customerService.customerRepository.customers);
