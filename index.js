const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const services = [
    'web development', 'App development', 'Game development',
    'Cloud computing', 'Termux' , 'Metasploit framework'
];

// middleware function for dynamic file
app.get('/service/:id', (req, res, next) => {
    const number = req.params.id;
    serviceName=services[number-1]
    const data = {
        title: 'Service Name',
        serviceName: serviceName,
        seviceNum:number
    };
    res.render('index', {data});
    next()
});

// port listening.....
app.listen(3000, () => {
  console.log('App gets started to running on the port 3000');
});
