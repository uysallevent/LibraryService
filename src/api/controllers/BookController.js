const AddBook = require("../../core/usecases/Book/AddBook");
const UpdateBook = require("../../core/usecases/Book/UpdateBook");
const RemoveBook = require("../../core/usecases/Book/RemoveBook");
const GetAllBook = require("../../core/usecases/Book/GetAllBook");
const ResponseWrapper = require("../../Infrastructure/Models/ResponseWrapper");

module.exports = (repository) => {
  const getAllBook = (req, res, next) => {
    const getAllBookCase = GetAllBook(repository);
    getAllBookCase.execute().then(
      (result) => {res.json(new ResponseWrapper(res.statusCode,null,result));},
      (err) => {next(err);}
    );
  };

  const addBook = (req,res,next)=>{
    const addBookCase=AddBook(repository);
    const {title, author, price, isbn, language, numberOfPages, publisher}=req.body;
    addBookCase.execute(title, author, price, isbn, language, numberOfPages, publisher)
    .then(
      (result) => {res.json(new ResponseWrapper(res.statusCode,null,result));},
      (err) => {next(err);}
    );
  }

  const updateBook = (req,res,next)=>{
    const updateBookCase=UpdateBook(repository);
    const {_id, title, author, price, isbn, language, numberOfPages, publisher}=req.body;
    updateBookCase.execute(title, author, price, isbn, language, numberOfPages, publisher, _id)
    .then(
      (result) => {res.json(new ResponseWrapper(res.statusCode,null,result));},
      (err) => {next(err);}      
    ).catch((err) => {
      return next(err);
    });
  }

  const removeBook = (req,res,next)=>{
    const RemoveBookCase=RemoveBook(repository);
    const {id}=req.body;
    RemoveBookCase.execute(id)
    .then(
      (result) => {res.json(new ResponseWrapper(res.statusCode,null,result))},
      (err) => {next(err);}
    );
  }

  return {
    addBook,
    updateBook,
    removeBook,
    getAllBook
  }
};


