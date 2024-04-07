const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');

router.post('/addExpense/:category/:expense/:description', crudController.addExpense);
router.post('/addIncome/:category/:income/:description', crudController.addIncome);

router.get('/getOneDayTotal', crudController.getOneDayTotal);
router.get('/getOneWeekTotal', crudController.getOneWeekTotal);
router.get('/getOneMonthTotal', crudController.getOneMonthTotal);
router.get('/getOneYearTotal', crudController.getOneYearTotal);
router.get('/getTotal', crudController.getTotal);

router.delete('/deleteByID/:id', crudController.deleteExpense);

router.put('/updateIncomeByID/:id/:category/:income/:description', crudController.updateIncome);
router.put('/updateExpenseByID/:id/:category/:expense/:description', crudController.updateExpense);

module.exports = router;
