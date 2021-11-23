export default class EmployeeRepository {
  constructor() {
    this.employees = [];
  }

  add(user) {
    this.employees.push(user);
  }
  listEmployees() {
    return this.employees();
  }
  getEmployeesById(id) {
    return this.employees.find((u) => u.id === id);
  }


}
