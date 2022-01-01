const Book = require("../../../Infrastructure/Models/Book");

module.exports = (repository) => {
  async function execute() {
    const books = await repository.getAll();
    return new Promise((resolve, reject) => {
      resolve(books);
    });
  }
  return { execute };
};
