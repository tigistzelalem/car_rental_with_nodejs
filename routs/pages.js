// defining the routs of pages
const express = require('express')
const rout = express.Router()

rout.get("/", (req, res) => {
    res.render("index",)
}) 
rout.get("/login", (req, res) => {
    res.sendFile("login.html", {root: "./public"})
}) 
rout.get("/register", (req, res) => {
    res.sendFile("register.html", {root: "./public"})
}) 
module.exports = rout