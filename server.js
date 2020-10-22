  
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const app = express()

app.set('view engine' , 'njk')

app.use(express.static('public'))
app.use(routes)

nunjucks.configure("views", {

    express:app,
    autoescape:false,
    noCache:true 

})

app.listen(5000, (req,res) => {
    console.log('server is up on localhost:5000')
})