//Tv show collection
  //title - string - required
  //last watched - date - required
  //Booleans of...
    //currently watching
    //series complete (no more shows will be aired)
    //series up to date (all currently aired episodes seen)
    //wishlist
  //Rating: rewatchable, liked, didn't like - string
  //genre - string[]
  //keywords - string[]
  //description - string 
  //notes - string
 

  // default - not required
const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  title: {type: String, required: true},
  lastWatched: Date,
  currentlyWatching: Boolean,
  seriesComplete: Boolean,
  seriesUpToDate: Boolean,
  toWatch: Boolean,
  rating: String,
  genre: [String],
  keywords: [String],
  description: String,
  notes: String
});

const Show = mongoose.model('Show', showSchema);

module.exports = Show;