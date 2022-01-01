module.exports = class Book {
  constructor(title, author, price, isbn, language, numberOfPages, publisher) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.isbn = isbn;
    this.language = language;
    this.numberOfPages = numberOfPages;
    this.publisher = publisher;
  }
};
