module.exports = (repository) => {
  function execute(Id) {
    return repository.getById(Id).then((author) => {
      return new Promise((resolve, reject) => {
        if (!Id) {
          reject(new Error("Id must be declared"));
          return;
        }

        if (!author) {
          reject(new Error("Author not found"));
          return;
        }
        resolve(author);
      })
        .then((author) => {
          return repository.delete(author);
        })
        .then((author) => {
          return Promise.resolve(true);
        });
    });
  }
  return { execute };
};
