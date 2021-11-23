import DataError from "../results/dataError.js";
export default class UserValidation {
  constructor() {
    this.errors = [];
  }
  checkUserValidityForErrors(user) {
    let requiredFields = "id firstName lastName age city salary".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem. ${field} is required`, user)
        );
      }
    }

    return hasErrors;
  }
  checkUserAge(user) {
    let hasErrorsAge = false;
    if (Number.isNaN(Number.parseInt(+user.age))) {
      hasErrorsAge = true;
      this.errors.push(
        new DataError(`Validation problem. ${user.age} is not a number`, user)
      );
    }
  }
  checkTypeUser(user) {
    if (user.type === "customer") {
      return true;
    } else {
      new DataError("Wrong user type", user);
    }
  }
}
