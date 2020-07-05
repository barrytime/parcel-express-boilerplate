const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json('test api success');
});
module.exports = router;
