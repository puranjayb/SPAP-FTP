const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');
const cookieParser = require('cookie-parser');

router.use(cookieParser())

router.post('/addExpense', crudController.addExpense);
router.post('/addIncome', crudController.addIncome);

router.get('/getOneDayTotal', crudController.getOneDayTotal);
router.get('/getOneWeekTotal', crudController.getOneWeekTotal);
router.get('/getOneMonthTotal', crudController.getOneMonthTotal);
router.get('/getOneYearTotal', crudController.getOneYearTotal);
router.get('/getTotal', crudController.getTotal);

router.delete('/deleteByID', crudController.deleteExpense);

router.put('/updateIncomeByID', crudController.updateIncome);
router.put('/updateExpenseByID', crudController.updateExpense);

module.exports = router;
