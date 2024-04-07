const connection = require('../config/dbConfig');

addExpense = (req, res) => {
    const { category, expense, description } = req.params;
    connection.query(
        'INSERT INTO finances (category, amount, description) VALUES (?, ?, ?)',
        [category, -1*expense, description],
        (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results);
        }
    );
}

addIncome = (req, res) => {
    const { category, income, description } = req.params;
    connection.query(
        'INSERT INTO finances (category, amount, description) VALUES (?, ?, ?)',
        [category, income, description],
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
        ```SELECT *, 
        SUM(amount) AS total,
        (SELECT SUM(amount) FROM finances WHERE amount < 0) AS expenses,
        (SELECT SUM(amount) FROM finances WHERE amount >= 0) AS income
        FROM finances 
        WHERE DATE(date) = CURDATE();
        ```,
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
        ```SELECT *, 
        SUM(amount) AS total,
        (SELECT SUM(amount) FROM finances WHERE amount < 0) AS expenses,
        (SELECT SUM(amount) FROM finances WHERE amount >= 0) AS income
        FROM finances 
        WHERE WEEK(date) = WEEK(CURDATE());
        ```,
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
        ```SELECT *, 
        SUM(amount) AS total,
        (SELECT SUM(amount) FROM finances WHERE amount < 0) AS expenses,
        (SELECT SUM(amount) FROM finances WHERE amount >= 0) AS income
        FROM finances 
        WHERE MONTH(date) = MONTH(CURDATE());
        ```,
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
        ```SELECT *, 
        SUM(amount) AS total,
        (SELECT SUM(amount) FROM finances WHERE amount < 0) AS expenses,
        (SELECT SUM(amount) FROM finances WHERE amount >= 0) AS income
        FROM finances 
        WHERE YEAR(date) = YEAR(CURDATE());
        ```,
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
        ```SELECT *, 
        SUM(amount) AS total,
        (SELECT SUM(amount) FROM finances WHERE amount < 0) AS expenses,
        (SELECT SUM(amount) FROM finances WHERE amount >= 0) AS income
        FROM finances;
        ```,
        (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results);
        }
    );
}

deleteExpense = (req, res) => {
    const { id } = req.params;
    connection.query(
        'DELETE FROM finances WHERE id = ?',
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
    const { id, category, amount, description } = req.params;
    connection.query(
        'UPDATE finances SET category = ?, amount = ?, description = ? WHERE id = ?',
        [category, amount, description, id],
        (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results);
        }
    );
}

updateIncome = (req, res) => {
    const { id, category, amount, description } = req.params;
    connection.query(
        'UPDATE finances SET category = ?, amount = ?, description = ? WHERE id = ?',
        [category, amount, description, id],
        (err, results) => {
            if (err) {
                throw err;
            }
            res.send(results);
        }
    );
}

module.exports = {addExpense, addIncome, getOneDayTotal, getOneWeekTotal, getOneMonthTotal, getOneYearTotal, getTotal, deleteExpense, updateExpense, updateIncome}