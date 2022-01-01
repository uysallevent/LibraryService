module.exports = (repository) => {
  async function execute() {
    const authors = await repository.getAll();
    return new Promise((resolve, reject) => {
      resolve(authors);
    });
  }
  return { execute };
};
