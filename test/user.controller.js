const { expect } = require("chai");
const userController = require("../src/controllers/user");
const db = require("../src/dbClient");

describe("User", () => {
  beforeEach(() => {
    // Clean DB before each test
    db.flushdb();
  });

  describe("Create", () => {
    it("create a new user", (done) => {
      const user = {
        username: "sergkudinov",
        firstname: "Sergei",
        lastname: "Kudinov",
      };
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null);
        expect(result).to.be.equal("OK");//test
        done();
      });
    });

    it("passing wrong user parameters", (done) => {
      const user = {
        firstname: "Sergei",
        lastname: "Kudinov",
      };
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null);
        expect(result).to.be.equal(null);
        done();
      });
    });

    it("avoid creating an existing user", (done) => {
      //   // TODO create this test
      //   // Warning: the user already exists

      const user = {
        username: "lilparenzi",
        firstname: "Léo",
        lastname: "Parrent",
      };
      userController.create(user, () => {

        userController.create(user, (err,result) => {

        expect(err).to.not.be.equal(null);
        expect(result).to.be.equal(null);
        done();
        })
      });

    
    });
  });

  // TODO Create test for the get method
  describe("Get", () => {
    it("get a user by username", (done) => {
      //1. First, create a user to make this unit test independent from the others
      const user = {
        username: "tomchopin",
        firstname: "Thomas",
        lastname: "Chopin",
      };

      userController.create(user, () => {
        userController.get(user.username, (err, result) => {
          expect(err).to.be.equal(null);
          expect(result).to.be.deep.equal({
            firstname: "Thomas",
            lastname: "Chopin",
          });
          done();
        });
      });
    });
    

    it("cannot get a user when it does not exist", (done) => {
      // Check si l'utilisateur est valide
      userController.get("invalid", (err, result) => {
        expect(err).to.not.be.equal(null);
        expect(result).to.be.equal(null);
      });
      done();
    });
  });
});