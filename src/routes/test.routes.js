const router = require('express').Router();
const controller = require('../controllers/test.controller');

router.post('/', async (req, res)=>{ return await controller.hello(req, res); })

module.exports = router;