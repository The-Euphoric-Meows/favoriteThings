const shows = require('../schemas/ShowSchema');

const getAllShows = (req, res, next) => {
  shows.find({}, (err, shows) => {
    if (err) {
      return next({
        log: 'Error has occurred in showController getAllShows middleware',
        message: {
          err: `An error occured: ${err}`
        }
      })
    };
    if (!shows) return next('no shows')
    res.locals.allshows = shows;
    return next();
  });
}

const addShow = (req, res, next) => {
  const { title } = req.body
  shows.create({title}, (err, newShow) => {
    if (err) return next({
      log: 'Error has occurred in showController addShow middleware',
        message: {
          err: `An error occured: ${err}`
        }
    });
    res.locals.newshow = newShow;
    return next();
  })
}

module.exports = {
  getAllShows,
  addShow
};