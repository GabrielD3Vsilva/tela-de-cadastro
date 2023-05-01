const express = require('express');
const app = express( );
const hbs = require('express-handlebars');
const handlebars = hbs.create({});
const Cad = require('./models/Cad');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json( ));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.get('/cad', function(req, res) {
    res.render('forms')
});

app.post('/add', function(req, res) {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

    Cad.create({
        nome : nome,
        email : email,
        senha : senha
    }
    ).then(function( ){
        res.render('home');
    }).catch(function( ) {
        res.send('erro');
    });

});

const port = 80;
app.listen(port, function( ) {
    console.log('load server in ' + port);
});