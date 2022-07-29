const express = require("express");
const app = express();
const port = 8000;
const { faker } = require("@faker-js/faker");

// we can create a function to return a random / fake "Product"

const User = () => {
  const user = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    first: faker.name.firstName(),
    last: faker.name.lastName(),
    userId: faker.datatype.uuid(),
  };
  return user;
};
const newUser = User();
console.log(newUser);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools'
 * }
 */

const Company = () => {
  const company = {
    userId: faker.datatype.uuid(),
    name: faker.internet.password(),
    address: {
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
  return Company;
};
const newCompany = Company();
console.log(newCompany);

// req is short for request
// res is short for response
app.get("/api/user", (req, res) => {
  res.json(newUser);
});
app.get("/api/company", (req, res) => {
  res.json(newCompany);
});

const server = app.listen(8000, () => console.log(`Server is locked and loaded on port ${server.address().port}!`));

// // this needs to be below the other code blocks
// app.listen(port, () => console.log(`Listening on port: ${port}`));
