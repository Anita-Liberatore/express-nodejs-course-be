const tasksService = require('../services/taskService');
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

const routes = (app) => {
    app.route('/task')
        .get(tasksService.findAll)
        
        .post(jsonParser,tasksService.createTask)


    app.route('/task/:id')
        .get(tasksService.findAll)
        
        .put((req, res) =>
            res.send('PUT request'))

        
        .delete(tasksService.deleteTask);
}

module.exports = routes;