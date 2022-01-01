module.exports = (repository) => {
  function execute(name, country, birthDate, _id) {
    return repository.getById(_id).then((author) => {
      return new Promise((resolve, reject) => {
        if (!(name && country && birthDate)) {
          reject(new Error("Validation failed"));
          return;
        }

        if (!author) {
          reject(new Error("Author not found"));
          return;
        }
        
        resolve(author);
      })
        .then((author) => {
          return repository.update(_id, {
            name: name,
            country: country,
            birthDate: birthDate,
          });
        })
        .then((author) => {
          return Promise.resolve(author);
        });
    });
  }
  return { execute };
};
