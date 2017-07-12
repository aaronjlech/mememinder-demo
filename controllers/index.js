const router = require('express').Router();
const Mememinder = require('../db/Mememinder');




const controller = {

   createMeme: (req, res) => {
      let mememinder = new Mememinder(req.body.meme);
      mememinder.save( (err, newMeme) => {
         if(err) {
            res.status(500).send(err);
         } else {
            res.send(newMeme);
         }
      })
   },

   getAllMemes: (req, res) => {
      Mememinder.find( (err, memes) => {
         if(err){
            res.status(500).send(err);
         }else {
            res.send(memes);
         }
      })
   },
   getOneMeme: (req, res) => {
      const { id } = req.params;
      Mememinder.findById( id, (err, meme) => {
         if(err) {
            res.status(500).send(err);
         } else {
            res.send(meme);
         }
      })
   },

   editMeme: (req, res) => {
      const { id } = req.params;
      Mememinder.findById( id, (err, meme) => {
         if(err) {
            res.status(500).send(err);
         } else {
            const { title, description, meme_link } = req.body.meme;
            meme.meme_link = meme_link;
            meme.title = title;
            meme.description = description;
            meme.save( (err, updatedMeme) => {
               if(err) {
                  res.status(500).send(err);
               } else {
                  res.send(updatedMeme);
               }
            })
         }
      })
   },

   deleteMeme: (req, res) => {
      const { id } = req.body;
       Mememinder.findByIdAndRemove(id, (err, meme) => {
          res.send(meme);
      });
   }


}


router.get('/', controller.getAllMemes);
router.get('/:id', controller.getOneMeme);
router.post('/', controller.createMeme);
router.put('/:id', controller.editMeme);
router.delete('/:id', controller.deleteMeme);
module.exports = router;





module.exports = router;
