// ==============================================
// Passport setup file
// ==============================================

require('dotenv').config();

// Dependencies:
const passport = require("passport");
const passportJWT = require("passport-jwt");
const User = require("../models/user");
const regeneratorRuntime = require("regenerator-runtime");

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
