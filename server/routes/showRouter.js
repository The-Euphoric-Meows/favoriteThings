const express = require('express');
const router = express.Router();
const { getAllShows, addShow } = require('../controllers/showController')

//Get all shows
router.get('/', getAllShows, (req, res) => {
  return res.status(200).json(res.locals.allshows)
});

//Post a tv show
router.post('/', addShow, (req, res) => {
  return res.status(200).json(res.locals.newshow)
})

//Update show values



//Export the Router

module.exports = router;