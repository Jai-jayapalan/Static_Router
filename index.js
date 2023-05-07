const express = require('express');
const app = express();
const path = require('path');

// setting the view engine for ejs
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));


// Available services 
const services = [
    'web development', 'App development', 'Game development',
    'Cloud computing', 'Termux' , 'Metasploit framework'
];


// routes
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/home.html'));
})

// middleware function for dynamic file
app.get('/service/:id', (req, res, next) => {
    const number = req.params.id;
    serviceName=services[number-1]
    const data = {
        title: 'Service Name',
        serviceName: serviceName,
        seviceNum:number
    };
    // data transfering....
    res.render('index', {data});
    next()
});

// port listening.....
app.listen(3000, () => {
  console.log('App gets started to running on the port 3000');
});
