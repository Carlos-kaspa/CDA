  
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const keyToken = require('./KeysTokens')
const monk = require('monk')

const app = express()

app.use(express.json())

const DB = monk(keyToken.db) // auth com o token do db do CDA
const users = DB.get('CDAdb') // pegando a colection de users no mongo
DB.then( () => { console.log('Connected to database') })


app.set('view engine' , 'njk')
app.use(express.static("public"))
app.use(routes)



nunjucks.configure("views", {

    express:app,
    autoescape:false,
    noCache:true 

})




app.listen(5000, (req,res) => {
    console.log('server is up on localhost:5000')
})



routes.post("/register", (req,res) => {

    const registry = {

        name: req.body.name.toString().toLowerCase(),
        email: req.body.email.toString().toLowerCase(),
        tel: req.body.tel,
        gender: req.body.gender.toString().toLowerCase(),
        birthDate: req.body.birthDate,
        registerDate: new Date()
        
    }

    users.insert(registry).then(createdUser => {
    
        res.json(createdUser)
                
    })

})
   

