import UserValidation from "../validationRules/userValidation.js";
import DataError from "../results/dataError.js";
import { users } from "../data/users.js";
import UserRepository from "../repositories/userRepository.js";
export default class UserService {
  constructor(loggerService) {
    this.userRepository = new UserRepository();
    this.userValidation = new UserValidation();
    this.loggerService = loggerService;
  }

  load() {
    for (const user of users) {
      if (this.userValidation.checkTypeUser(user)) {
        this.userRepository.add(user);
      } else {
        this.userValidation.errors.push(new DataError("Wrong user type", user));
      }
    }
  }

  add(user) {
    if (
      this.userValidation.checkTypeUser(user) &&
      !userValidation.checkUserValidityForErrors(user) &&
      !this.userValidation.checkUserAge(user)
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
