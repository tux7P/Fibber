import {faker} from '@faker-js/faker';

class Generator {
  generateEmail(): string {
    return faker.internet.exampleEmail().toLowerCase();
  }

  generateFirstName(): string {
    return faker.person.firstName();
  }

  generateLastName(): string {
    return faker.person.lastName();
  }
}

export default new Generator();
