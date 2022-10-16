const router = require('express').Router();
const { Text } = require('../../models');
const textRoutes = require('./text-routes.js.js');

router.use('/text', textRoutes);



router.get('/', (req, res) => {
    Text.findAll()
      .then(dbTextData => res.json(dbTextData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post('/', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    Text.create({
      username: req.body.username,
      email: req.body.Text
    })
      .then(dbTextData => res.json(dbTextData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });;

router.delete('/', (req, res) => {});

module.exports = API;
