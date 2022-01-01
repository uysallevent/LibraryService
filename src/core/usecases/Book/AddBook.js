const Book = require("../../../Infrastructure/Models/Book");

module.exports = (repository) => {
  function execute(title, author, price, isbn, language, numberOfPages, publisher) {
    return repository.getByTitle(title).then((book) => {
      return new Promise((resolve, reject) => {
        if (!(title && author && isbn && language && numberOfPages && publisher)) {
          reject(new Error("Validation failed"));
          return;
        }

        if (book) {
          reject(new Error("Book already exists"));
          return;
        }

        const newBook = new Book(title, author, price, isbn, language, numberOfPages, publisher);
        resolve(newBook);
      }).then((book) => {
          return repository.add(book);
        }).then((book) => {
          return Promise.resolve(book);
        });
    });
  }
  return { execute };
};
