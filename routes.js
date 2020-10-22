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

routes.post("/instructors", (req,res) => {

    res.send(req.body)

    const registry = {

        nome: req.body.name,
        email: req.body.email,
        tel: req.body.tel,
        gender: req.body.gender,
        birthDate: req.body.birthDate
        
    }

})



module.exports = routes