const express = require('express');

const app = express(); // execution of express

const PORT = 4000;

app.get('/ping', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT} `)
);