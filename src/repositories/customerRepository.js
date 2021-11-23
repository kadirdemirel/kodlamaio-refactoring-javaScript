export default class CustomerRepository {
  constructor() {
    this.customers = [];
  }
  add(user) {
    this.customers.push(user);
  }
  listCustomers() {
    return this.customers();
  }
  getCustomersById(id) {
    return this.customers.find((u) => u.id === id);
  }

}
