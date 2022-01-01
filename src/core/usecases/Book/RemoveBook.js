module.exports = (repository) => {
  function execute(Id) {
    return repository.getById(Id).then((book) => {
      return new Promise((resolve, reject) => {
        if (!Id) {
          reject(new Error("Validation failed"));
          return;
        }

        if (!book) {
          reject(new Error("Book not found"));
          return;
        }

        resolve(book);
      })
        .then((book) => {
          return repository.delete(book);
        })
        .then((book) => {
          return Promise.resolve(true);
        });
    });
  }
  return { execute };
};
