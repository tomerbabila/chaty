const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json('login');
});

module.exports = router;
