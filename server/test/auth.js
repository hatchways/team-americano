// Set Node Environment:
process.env.NODE_ENV = "test";

// User Model:
const User = require("../src/models/user");

// Dependencies:
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.should();
chai.use(chaiHttp);

describe("Authenticate", () => {
  beforeEach( done => {
    User.deleteMany({}, (err) => {
      done();
    });
  });

  // Test Registration:
  describe("/POST register", () => {
    it("It should not register a new user without a provided email", done => {
      const user = {
        name: "John Doe",
        password: "password"
      };

      chai.request(app)
        .post("/api/auth/register")
        .send(user)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
        });
        done();
    });
    it("It should register a new user", done => {
      const user = {
        name: "John Doe",
        email: "email@email.com",
        password: "password"
      }
      chai.request(app)
        .post("/api/auth/register")
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          res.header.should.have.property("Authorization");
        });
        done();
    });
  });

  // Test Login:
  describe("/POST login", () => {
    it("It should fail to login user with different password", done => {
      const user = {
        email: "email@email.com",
        password: "notAMatch"
      };

      chai.request(app)
        .post("/api/auth/login")
        .send(user)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
        });
        done();
    });
    it("It should successfully login the user", done => {
      const user = {
        email: "email@email.com",
        password: "password"
      }

      chai.request(app)
        .post("/api/auth/login")
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.header.should.have.property("Authorization");
        });
        done();
    })
  });

});
