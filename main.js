// expressjs kütüphanesini ekleme
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // görüntüleme moptorunu ejs ayarlama

let title = "youtube videosu"

app.get('/', (req, res) => {
    res.render('home', {
        req,
        res,
        title
    })
})

app.listen(3535)