const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.json({"message": "RESTful CRUD"});
});

module.exports = router