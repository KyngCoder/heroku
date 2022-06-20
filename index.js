const express = require('express');

const importedData = require('./data.json');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/cake',(req, res) => {
    res.send(importedData);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})