"use strict";
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "James Holden",
          email: "captain@rocinante.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          location: "London",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Naomi Nagata",
          email: "engineer@rocinante.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          location: "Berlin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Amos Burton",
          email: "mechanic@rocinante.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          location: "Barcelona",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alex Kamal",
          email: "pilot@rocinante.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          location: "London",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
