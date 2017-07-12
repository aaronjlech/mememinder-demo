const mongoose = require('mongoose');




const memeSchema = new mongoose.Schema({

   title: {type: String, required: true },
   meme_link: {type: String, required: true},
   description: {type: String}
})


const Mememinder = mongoose.models('Mememinder', memeSchema);


module.exports = Mememinder;
