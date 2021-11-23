export default class UserRepository {
  constructor() {
    this.users = [];
  }
  add(user) {
    this.users.push(user);
  }
  listUsers() {
    return this.employees();
  }
  getUsersById(id) {
    return this.users.find((u) => u.id === id);
  }


}
