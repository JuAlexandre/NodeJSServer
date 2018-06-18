let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    let drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];

    let tagline = "It's a beautiful sentence !";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(3000);
console.log('3000 is the magic port');
