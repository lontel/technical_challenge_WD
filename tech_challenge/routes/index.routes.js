const router = require("express").Router();
const phones = require('./../../data/phones.json')

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get('/phones', (req, res) => phones.find(() => res.json(phones)))

router.get('/phones/:id', (req, res) => {

  const { id } = req.params
  
  res.json(phones.find(elm => elm.id == id))

})


module.exports = router;
