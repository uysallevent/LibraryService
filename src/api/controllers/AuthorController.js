const AddAuthor = require("../../core/usecases/Author/AddAuthor");
const UpdateAuthor = require("../../core/usecases/Author/UpdateAuthor");
const RemoveAuthor = require("../../core/usecases/Author/RemoveAuthor");
const GetAllAuthor = require("../../core/usecases/Author/GetAllAuthor");
const ResponseWrapper = require("../../Infrastructure/Models/ResponseWrapper");

module.exports = (repository) => {
  const getAllAuthor = (req, res, next) => {
    const getAllAuthorCase = GetAllAuthor(repository);
    getAllAuthorCase.execute().then(
      (result) => {
        res.json(new ResponseWrapper(res.statusCode,null,result));
      },
      (err) => {
        next(err);
      }
    );
  };

  const addAuthor = (req, res, next) => {
    const addAuthorCase = AddAuthor(repository);
    const { name, country, birthDate } = req.body;
    addAuthorCase.execute(name, country, birthDate).then(
      (result) => {
        res.json(new ResponseWrapper(res.statusCode,null,result));
      },
      (err) => {
        next(err);
      }
    );
  };

  const updateAuthor = (req, res, next) => {
    const updateAuthorCase = UpdateAuthor(repository);
    const { _id, name, country, birthDate } = req.body;
    updateAuthorCase.execute(name, country, birthDate, _id).then(
      (result) => {
        res.json(new ResponseWrapper(res.statusCode,null,result));
      },
      (err) => {
        next(err);
      }
    );
  };

  const removeAuthor = (req, res, next) => {
    const RemoveAuthorCase = RemoveAuthor(repository);
    const { id } = req.body;
    
    RemoveAuthorCase.execute(id).then(
      (result) => {
        res.json(new ResponseWrapper(res.statusCode,null,result));
      },
      (err) => {
        next(err);
      }
    );
  };

  return {
    addAuthor,
    updateAuthor,
    removeAuthor,
    getAllAuthor,
  };
};
