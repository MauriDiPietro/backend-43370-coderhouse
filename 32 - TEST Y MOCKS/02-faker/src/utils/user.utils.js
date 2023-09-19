import { faker } from "@faker-js/faker";
faker.locale = "es";
// import { fakerES as faker } from "@faker-js/faker";

export const generateUser = () => {
    return {
      name: faker.name.findName(),
      // faker.person.firstName('female') // 'Victoria',
      // faker.person.firstName('male') // 'Tom',
      // faker.person.fullName({ sex: 'male' }),
      email: faker.internet.email(),
      website: faker.internet.url(),
      image: faker.image.imageUrl(),
    };
  }
