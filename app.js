const express =  require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req,res) =>{
    res.render('index')
    console.log('its working')
})

app.get('/about', (req,res) =>{
    res.render('about')
    console.log('its about')
})

app.get('/game', (req,res) =>{
    res.render('game')
    console.log('its game')
})

app.get('/single', (req,res) =>{
    res.render('single')
    console.log('its single')
})

app.get('/support', (req,res) =>{
    res.render('support')
    console.log('its support')
})

app.get('/trivia', (req,res) =>{
    res.render('trivia')
    console.log('its trivia')
})

app.get('/login', (req,res) =>{
    res.render('login')
    console.log('its login')
})

app.get('/signup', (req,res) =>{
    res.render('signup')
    console.log('its signup')
})

app.listen(process.env.PORT || 3000);