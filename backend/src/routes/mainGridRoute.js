const { Router } = require('express');
const MainGridController = require('../controllers/MainGridController');

const router = Router();

router.get('/', async (req, res) => {
    MainGridController.getAllMainGrid(req, res);
});

module.exports = router;