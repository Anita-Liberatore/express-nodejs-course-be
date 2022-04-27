const db = require('../database/db');

exports.findAll = (req, res, next) => {

    const query = "SELECT * FROM TASK";

    db.query(query, (err, rows) => {
        if (err)
            res.send(err);

        console.log(rows);

        res.status(200).json({
            status: "Success",
            length: rows?.length,
            tasks: rows,
        });
    });
};
