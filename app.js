const express = require('express');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


const dbURI = 'mongodb+srv://Maniac123:mana!l123@cluster0.s1ec0.mongodb.net/';
mongoose.connect(dbURI )
.then((result)=> app.listen(5000))  
.catch((err) => console.log(err));


app.set('view engine' , 'ejs');



app.get('/' , (req,res) => {
    res.redirect('/blogs');
})

app.get('/about' , (req, res) => {
    res.render('about', {title: 'About Page'});
})

app.get('/create' , (req, res) => {
    res.render('create' , {title: 'Create Form'})
})

app.get('/blogs/' , blogRoutes);


app.use( (req, res) => {
    res.render('404' , {title: 'Page Not Found!'});
})