const todoSequelize = require("../../src/database/setup/database");
const TodoModel = require("../../src/database/models/TodoModel");
const TestDataTodos = require("./test-data/TestDataTodos");

module.exports = async () => {
  try {
    // Drop und Sync der Datenbank
    await todoSequelize.dropSchema("todos");
    await todoSequelize.sync();

    // Daten in die Datenbank einfügen
    await TodoModel.bulkCreate(TestDataTodos);

    console.log("Test DB initialized");
  } catch (e) {
    console.error("Error initializing test DB", e);
  }
};

