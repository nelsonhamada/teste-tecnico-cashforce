const { Router } = require('express');
const mainGridRouter = require("./mainGridRoute");

const router = Router();

router.use("/main", mainGridRouter);

module.exports = router;