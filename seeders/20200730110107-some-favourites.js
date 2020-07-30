"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "favourites",
      [
        {
          userId: 1,
          location: "Berlin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          location: "Stockholm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          location: "Paris",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          location: "London",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          location: "Stockholm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          location: "Paris",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          location: "Tokyo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          location: "Singapore",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          location: "New York",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          location: "Amsterdam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          location: "Vancouver",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          location: "San Francisco",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("favourites", null, {});
  },
};
