const router = require('express').Router();

const apiRoutes = require('./API');

router.use('/API', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;