const express = require('express');
const routes = require('./src/routes/taskRoutes');
const logger = require('./src/middleware/logger')
const app = express(); // execution of express

const PORT = 4000;
app.use(logger);

routes(app);

app.get('/ping', (req, res) =>
    res.send(`PING API and server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT} `)
);


