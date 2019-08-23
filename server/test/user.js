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
  });
});
