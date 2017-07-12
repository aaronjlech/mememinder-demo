const router = require('express').Router();
const Mememinder = require('../db/Mememinder');




const controller = {

   createMeme: (req, res) => {
      req.body.meme
   },

   getAllMemes: (req, res) => {

   },

   editMeme: (req, res) => {

   },

   deleteMeme: (req, rest) => {

   }


}


router.get('/', controller.getAllMemes);
router.post('/', controller.createMeme);
router.put('/:id', controller.editMeme);
router.delete('/:id', controller.deleteMeme);


module.exports = router;





module.exports = router;
