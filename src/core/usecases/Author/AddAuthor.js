const Author = require("../../../Infrastructure/Models/Author");

module.exports = (repository) => {
   function execute(name, country, birthDate) {
    return repository.getByName(name).then((author) => {
      return new Promise((resolve, reject) => {
        if (!(name && country && birthDate)) {
          reject(new Error("Validation failed"));
          return;
        }

        if (author) {
          reject(new Error("Author already exists"));
          return;
        }

        const newAuthor = new Author(name, country, birthDate);
        resolve(newAuthor);
      }).then((author) => {
          return repository.add(author);
        }).then((author) => {
          return Promise.resolve(author);
        });
    });
  }
  return { execute };
};
