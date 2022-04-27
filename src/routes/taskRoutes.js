const tasksService = require('../services/taskService');

const routes = (app) => {
    app.route('/tasks')
        .get((req,res,next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, tasksService.findAll)
        
        .post((req, res) =>
            res.send('GET request'));

    app.route('task/:id')
        .put((req, res) =>
            res.send('PUT request'))
        
        .delete((req, res) =>
            res.send('DELETE request'));
}

module.exports = routes;