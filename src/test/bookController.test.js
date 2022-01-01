const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const app = require("../../app");
const constants = require("../config/constants");
const server = `http://localhost:${constants.PORT}`;

describe("Book GetAll", () => {
  it("Get : Book", (done) => {
    chai
      .request(server)
      .get("/book")
      .end((error, response) => done());
  });
});

describe("Book Insert", () => {
  it("Post : Book", (done) => {
    chai
      .request(server)
      .post("/book")
      .send({
        title: "Test Book13",
        author: "61ce285eaef2f46625c31f6b",
        price: 87.5,
        isbn: "124.51",
        language: "TR",
        numberOfPages: 340,
        publisher: "Test publisher",
      })
      .end((error, response) => {
        done();

        describe("Book Update", () => {
          it("Put : Book", (done) => {
            chai
              .request(server)
              .put("/book")
              .send({
                _id: response.body.data._id,
                title: "Test Book14",
                author: "61ce285eaef2f46625c31f6b",
                price: 0,
                isbn: "124.00",
                language: "TR",
                numberOfPages: 340,
                publisher: "Test publisher",
              })
              .end((error, response) => done());
          });
        });

        describe("Book Delete", () => {
          it("Delete : Book", (done) => {
            chai
              .request(server)
              .delete("/book")
              .send({ id: response.body.data._id })
              .end((error, response) => {
                done();
              });
          });
        });
      });
  });
});
