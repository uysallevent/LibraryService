const Book = require("../../../Infrastructure/Models/Book");

module.exports = (repository) => {
   function execute(title, author, price, isbn, language, numberOfPages, publisher, _id) {
    return repository.getById(_id).then((book) => {
      return new Promise((resolve, reject) => {

        if (!(title && author && isbn && language && numberOfPages && publisher)) {
          reject(new Error("Validation failed"));
          return;
        }

        if (!book) {
          reject(new Error("Book not find"));
          return;
        }

        resolve(book);
      }).then((book) => {
          return repository.update(_id, {
            title: title,
            author: author,
            price: price,
            isbn: isbn,
            language: language,
            numberOfPages: numberOfPages,
            publisher: publisher,
          });
        }).then((book) => {
          return Promise.resolve(book);
        });
    });
  }
  return { execute };
};
