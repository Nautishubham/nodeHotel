const express = require('express');
const app = express();
const db = require('./db');
const bodyparser = require('body-parser');
const Person = require('./Models/person');
require('dotenv').config()
app.use(bodyparser.json());

const personController = require('./controllers/personController'); // Import CRUD functions

app.get('/', (req, res) => {
    res.send('Welcome to my hotel');
});

// CRUD Routes
app.post('/person', personController.createPerson);
app.get('/person', personController.getAllPersons);
app.get('/person/:id', personController.getPersonById)
app.put('/person/:id', personController.updatePerson);
app.delete('/person/:id', personController.deletePerson);

app.listen(process.env.PORT, () => {
    console.log('Listening on port 3000');
});
