const connection = require(`../config/dbConfig`);

addExpense = (req, res) => {
    const { category, amount, description } = req.body;
    
    connection.query(
        `INSERT INTO finances (category, amount, description) VALUES (?, ?, ?);`,
        [category, -1 * amount, description],
        (err, results) => {
            if (err) {
                console.error(`Error adding expense:`, err);
                res.status(500).send(`Internal Server Error`);
            } else {
                res.status(201).json(results);
            }
        }
    );
}

addIncome = (req, res) => {
    const { category, amount, description } = req.body;
    connection.query(
        `INSERT INTO finances (category, amount, description) VALUES (?, ?, ?);`,
        [category, amount, description],
        (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results);
        }
    );
}

getOneDayTotal = (req, res) => {
    connection.query(
        `SELECT
        id, category, amount, description,
        SUM(amount) AS total,
        (SELECT SUM(amount) FROM finances WHERE amount < 0) AS expenses,
        (SELECT SUM(amount) FROM finances WHERE amount >= 0) AS income
        FROM finances
        WHERE DATE(date_of_purchase) = CURDATE()
        GROUP BY id, category, description;`,
        (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results);
        }
    );
}

getOneWeekTotal = (req, res) => {
    connection.query(
        `SELECT *, 
        SUM(amount) AS total,
        (SELECT SUM(amount) FROM finances WHERE amount < 0) AS expenses,
        (SELECT SUM(amount) FROM finances WHERE amount >= 0) AS income
        FROM finances 
        WHERE YEARWEEK(date_of_purchase) = YEARWEEK(NOW())
        GROUP BY id, category, description;`,
        (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results);
        }
    );
}

getOneMonthTotal = (req, res) => {
    connection.query(
        `SELECT *, 
        SUM(amount) AS total,
        (SELECT SUM(amount) FROM finances WHERE amount < 0) AS expenses,
        (SELECT SUM(amount) FROM finances WHERE amount >= 0) AS income
        FROM finances 
        WHERE MONTH(date_of_purchase) = MONTH(CURDATE()) AND YEAR(date_of_purchase) = YEAR(CURDATE())
        GROUP BY id, category, description;`,
        (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results);
        }
    );
}

getOneYearTotal = (req, res) => {
    connection.query(
        `SELECT *, 
        SUM(amount) AS total,
        (SELECT SUM(amount) FROM finances WHERE amount < 0) AS expenses,
        (SELECT SUM(amount) FROM finances WHERE amount >= 0) AS income
        FROM finances 
        WHERE YEAR(date_of_purchase) = YEAR(CURDATE())
        GROUP BY id, category, description;`,
        (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results);
        }
    );
}

getTotal = (req, res) => {
    connection.query(
        `SELECT *, 
        SUM(amount) AS total,
        (SELECT SUM(amount) FROM finances WHERE amount < 0) AS expenses,
        (SELECT SUM(amount) FROM finances WHERE amount >= 0) AS income
        FROM finances
        GROUP BY id, category, description;`,
        (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results);
        }
    );
}

deleteExpense = (req, res) => {
    const { id } = req.body;
    connection.query(
        `DELETE FROM finances WHERE id = ?;`,
        [id],
        (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results);
        }
    );
}

updateExpense = (req, res) => {
    const { id, category, amount, description } = req.body;
    connection.query(
        `UPDATE finances SET category = ?, amount = ?, description = ? WHERE id = ?;`,
        [category, -1 * amount, description, id],
        (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results);
        }
    );
}

updateIncome = (req, res) => {
    const { id, category, amount, description } = req.body;
    connection.query(
        `UPDATE finances SET category = ?, amount = ?, description = ? WHERE id = ?;`,
        [category, amount, description, id],
        (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results);
        }
    );
}

module.exports = { addExpense, addIncome, getOneDayTotal, getOneWeekTotal, getOneMonthTotal, getOneYearTotal, getTotal, deleteExpense, updateExpense, updateIncome };