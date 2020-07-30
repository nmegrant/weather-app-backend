"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "James Holden",
          email: "captain@rocinante.com",
          password: "test",
          location: "London",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Naomi Nagata",
          email: "engineer@rocinante.com",
          password: "test",
          location: "Berlin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Amos Burton",
          email: "mechanic@rocinante.com",
          password: "test",
          location: "Barcelona",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alex Kamal",
          email: "pilot@rocinante.com",
          password: "test",
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
