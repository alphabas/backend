const express = require('express');
const app = express();
const cors = require('cors');
const corss = cors();
const connect = require('./models/connect');

app.use(corss, (req, res, next)=>{
    next(); 
})

const Thing = require('./models/Thing');

app.use(express.json());

const stuff = [
    {
        _id: 1,
        title : 'Mon premier object' ,
        description : 'No comment',
        imageUrl : '',
        price : 12000,
        userId : 'alphabas'
    },

    {
        _id: 2,
        title : 'Mon dexieume object' ,
        description : 'No comment for second',
        imageUrl : '',
        price : 10000,
        userId : 'alphabas'
    },

    {
        _id: 1,
        title : 'Mon troisieme object' ,
        description : 'No comment third object',
        imageUrl : '',
        price : 9000,
        userId : 'alphabas'
    },
];





//MIDLWARE AVEC NEXT {pour passer a la fonction suivante}

app.post('/api/stuff', (req, res, next) => {
     delete req.body._id;
     const thing = new Thing({
        ...req.body
     });
     thing.save()
     .then(() => res.status(201).json({message : 'Objet saved ...'}))
     .catch(error => error.status(400).json({error}));
    //  stuff.push(req.body);
    // res.status(201).json({
    //     message : "DATA SAVED SUCCESSFFULY"
    // })
    // next();
})


app.get('/api/stuff/:id',(req, res, next)=>{
    Thing.findOne({ _id : req.params.id })
    .then(thing => res.status(200).json(thing))
    .cath(error => res.status(404).json({error}));
});


app.get('/api/stuff', (req, res, next)=>{
    Thing.find()
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(400).json({error}));
    // next();
});






module.exports = app;