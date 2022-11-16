
const express = require("express")
const regisetr = require("./register")
const login = require("./login")
const logout = require("./logout")

const rout = express.Router()
// rout.post("/register", "register")
// rout.post("/login", "register")
// rout.get("/logout", "logout")

module.exports = rout
