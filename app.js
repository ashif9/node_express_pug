const express = require('express');
const path = require('path');

// init the app
const app =  express();

// Load the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', function(req, res){
    let articles = [
        {
            id: 1,
            title: 'Article One',
            author: 'Ashif',
            body: 'This is article number One'
        },
        {
            id: 2,
            title: 'Article Two',
            author: 'Arif',
            body: 'This is article number Two'
        },
        {
            id: 3,
            title: 'Article Three',
            author: 'Riazul',
            body: 'This is article number Three'
        },
        {
            id: 4,
            title: 'Article four',
            author: 'Zakaria',
            body: 'This is article number Four'
        }
    ]
    res.render('index', {
        title: 'Articles',
        articles: articles
    });
});

// add route
app.get('/articles/add', function(req, res){
    res.render('add_articles',{
        title: 'add Articles'
    });
});

// Start Server
app.listen(3000, function(){
 console.log('Server starts as port no. 3000');
});

