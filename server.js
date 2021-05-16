const express = require('express');
const app = express();
var path = require('path');
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/CV.html', function (req, res) {
    res.render('CV');
});

app.get('/Portfolio.html', function (req, res) {
    res.render('Portfolio');
});

app.get('/ProjetsRealises.html', function (req, res) {
    res.render("ProjetsRealises");
});

app.get('/Hobbys.html', function (req, res) {
    res.render('Hobbys');
});

app.get('/index.html', function (req, res) {
    res.render('index');
});

app.get('/contact.html', function (req, res) {
    res.render('contact');
});

app.get('/objectifsPro.html', function (req, res) {
    res.render('ObjectifsPro');
});


app.listen(80);
