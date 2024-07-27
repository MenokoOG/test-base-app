const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataFilePath = path.join(__dirname, '../data/data.json');

router.get('/items', (req, res) => {
    fs.readFile(dataFilePath, (err, data) => {
        if (err) {
            res.status(500).send('Error reading data file.');
            return;
        }
        res.json(JSON.parse(data));
    });
});

module.exports = router;
