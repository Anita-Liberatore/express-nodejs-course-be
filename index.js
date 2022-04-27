const express = require('express');
const routes = require('./src/routes/taskRoutes');
const app = express(); // execution of express

const PORT = 4000;

routes(app);

app.get('/ping', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT} `)
);


