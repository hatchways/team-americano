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

describe("User", () => {
  beforeEach( done => {
    User.deleteMany({}, err => {
      done();
    });
  });

  // Test Fetching Authenticated User:
  describe("/GET user", () => {
    it("It should return unauthorized since there is no logged in user", done => {
      chai.request(app)
        .get("/api/user")
        .end((err, res) => {
          res.should.have.status(401);
        });
        done();
    });
    it("It should fetch the currently authenticated user", async done => {
      const user = {
        name: "John Doe",
        email: "email@gmail.com",
        password: "password"
      };

      const token = new Promise((resolve, reject) => {
        request(app)
          .post("/api/auth/register")
          .send(user)
          .end((err, res) => {
            if (err) {
              return reject(err);
            }
            return resolve(res.body.token);
          });
      });

      chai.request(app)
        .get("/api/user")
        .set("Authorization", "Bearer " + token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
        });
        done();
    });
  });
});
