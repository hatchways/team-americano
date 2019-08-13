// ==============================================
// Passport setup file
// ==============================================

// Dependencies:
const passport = require("passport");
const passportJWT = require("passport-jwt");
const User = require("../models/user");

// Get Extract and Strategy:
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.PRIVATE_KEY
}, async (jwtPayload, cb) => {
  try {
    const user = await User.findById(jwtPayload.id);
    return cb(null, user);
  } catch (e) {
    return cb(e);
  }
}));
