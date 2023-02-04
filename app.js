const express = require('express');
const app = express();


//MIDLWARE AVEC NEXT {pour passer a la fonction suivante}
app.use((req, res, next) => {
    console.log("MESSAGE RECU");
    // res.json({message : "message recu"});
    next();
})

app.use((req, res) => {
    res.json({message : 'votre message a bien ete recue'});
});

module.exports = app;