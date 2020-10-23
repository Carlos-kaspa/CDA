const express = require('express')
const routes = express.Router()

routes.get("/home", function(req,res){

    return res.render("home")
})

routes.get("/", function(req,res){

    return res.redirect("home")
})

routes.get("/instructors", function(req,res){

    return res.render("instructors")
})

routes.get("/members", function(req,res){

    return res.render("members")
})

routes.get("/register", function(req,res){

    return res.render("register")
})



module.exports = routes