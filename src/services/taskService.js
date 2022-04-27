const db = require('../database/db');
const uuid = require('uuid');

exports.findAll = (req, res, next) => {

    const query = "SELECT * FROM TASK";

    db.query(query, (err, rows) => {
        if (err)
            return next(err, 500);

        console.log(rows);

        res.status(200).json({
            status: "Success",
            length: rows?.length,
            tasks: rows,
        });
    });
};

exports.createTask = (req, res, next) => {
    console.log(req.body)

    if (!req.body) 
        return next("No form data found", 404);

    const values = [Math.floor(Math.random() * 100), req.body.description, moment().format(), req.body.dateDelete];
    console.log(values)

    db.query(
        "INSERT INTO TASK (id_task, description, date_insert, date_delete) VALUES(?)",
        [values],
        function (err, data) {
            if (err) 
                return next(err, 500);

            res.status(201).json({
                status: "Success",
                message: "Task created!",
            });
        }
    );
};
