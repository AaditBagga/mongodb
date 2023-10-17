const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Budget = require('./models/budgetSchema'); // Import the budget schema

app.use(cors());
app.use(bodyParser.json()); // middleware to parse JSON request bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/personalBudget', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Could not connect to MongoDB:', error));

// Fetch data from MongoDB
app.get('/budget', (req, res) => {
    Budget.find().then((data) => {
        res.json(data);
    }).catch((error) => {
        res.status(500).send('Error fetching data from database');
    });
});

// Add new data to MongoDB
// Add new data to MongoDB
app.post('/budget', (req, res) => {
    if (req.body.myBudget && Array.isArray(req.body.myBudget)) {
        const promises = req.body.myBudget.map(item => {
            const newBudgetItem = new Budget({
                title: item.title,
                budget: item.budget,  // Note the key change from "budget" to "budget"
                color: item.color  // You need to provide a color here or adjust your input JSON to include colors
            });
            return newBudgetItem.save();
        });

        Promise.all(promises)
            .then(() => res.status(201).send('Data added successfully'))
            .catch((error) => res.status(500).send('Error saving data to database'));
    } else {
        res.status(400).send('Invalid data format');
    }
});


app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
