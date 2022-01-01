const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const app = require("../../app");
const constants = require("../config/constants");
const server = `http://localhost:${constants.PORT}`;

describe("Author GetAll", () => {
  it("Get : Author", (done) => {
    chai
      .request(server)
      .get("/author")
      .end((error, response) => done());
  });
});

describe("Author Insert", () => {
  it("Post : Author", (done) => {
    chai
      .request(server)
      .post("/author")
      .send({
        name: "Namık",
        country: "Turkey",
        birthDate: "1947-06-08",
      })
      .end((error, response) => {
        done();

        describe("Author Update", () => {
          it("Put : Author", (done) => {
            chai
              .request(server)
              .put("/author")
              .send({
                _id: response.body.data._id,
                name: "Namık Kemal",
                country: "Turkey",
                birthDate: "1949-08-08",
              })
              .end((error, response) => done());
          });
        });

        describe("Author Delete", () => {
          it("Delete : Author", (done) => {
            chai
              .request(server)
              .delete("/author")
              .send({ id: response.body.data._id })
              .end((error, response) => {
                done();
              });
          });
        });
      });
  });
});
