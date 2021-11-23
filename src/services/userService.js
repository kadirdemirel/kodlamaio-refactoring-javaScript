import UserValidator from "../validationRules/userValidator.js";
import DataError from "../results/dataError.js";
import { users } from "../data/users.js";
import UserRepository from "../repositories/userRepository.js";
export default class UserService {
  constructor(loggerService) {
    this.userRepository = new UserRepository();
    this.userValidator = new UserValidator();
    this.loggerService = loggerService;
  }

  load() {
    for (const user of users) {
      if (this.userValidator.checkTypeUser(user)) {
        this.userRepository.add(user);
      } else {
        this.userValidator.errors.push(new DataError("Wrong user type", user));
      }
    }
  }

  add(user) {
    if (
      this.userValidator.checkTypeUser(user) &&
      !userValidator.checkUserValidityForErrors(user) &&
      !this.userValidator.checkUserAge(user)
    ) {
      this.userRepository.add(user);
    } else {
      new DataError("This user can not be added. Wrong user type", user);
    }
    this.loggerService.log(user);
  }
  listUsers() {
    return this.userRepository.listUsers();
  }
  getUsersById(id) {
    return this.userRepository.getUsersById(id);
  }

  getUsersSorted() {
    return this.users.sort((user1, user2) => {
      if (user1.firstName > user2.firstName) {
        return 1;
      } else if (user1.firstName === user2.firstName) {
        return 0;
      } else {
        return -1;
      }
    });
  }
}
