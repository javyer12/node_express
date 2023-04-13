const { faker } = require('@faker-js/faker');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  for (let i = 0; i < 100; i++) {
    users.push({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      image: faker.image.imageUrl()
    });
  }
  res.send(users)
})


module.exports = router;
