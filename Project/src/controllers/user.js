const db = require("../dbClient");

module.exports = {
  create: (user, callback) => {
    // Check parameters
    if (!user.username)
      return callback(new Error("Wrong user parameters"), null);
    // Create User schema
    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    };
    // Save to DB
    // TODO check if user already exists

    db.hgetall(user.username, (err, res) => {
      if (err) {
        return callback(err, null);
      }
      if (!res) {
        db.hmset(user.username, userObj, (err, res) => {
          if (err) return callback(err, null);
          callback(null, res);
        });
      } else {
        callback(new Error("Utilisateur déjà enregistré !"), null);
      }
    });

  },
  get: (username, callback) => {
    //test
    if (!username) {
      return callback(new Error("Il faut un username !"), null);
    }

    db.hgetall(username, (error, res) => {
      if (error) {
        return callback(error, null);
      }
      if (res) {
        return callback(null, res);
      } else {
        return callback(new Error("L'utilisateur n'a pas été trouvé !"), null);
      }
    });
  },
};
