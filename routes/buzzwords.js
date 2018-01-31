
const express = require('express');
const router = express.Router();

let buzzWordsArr = [];
let score = 0;

router.use((req, res, next) => {
  console.log(`In User Route ${Date.now()}`)
  next();
})
buzzWordsArr.push({ buzzWord: 'hello', points: 4 });
//
router.get('/', (req, res) => {
  return res.json({ buzzWord: buzzWordsArr })
})

  .post('/', (req, res) => {
    if (buzzWordsArr.length < 5) {
      let body = req.body;
      // let newBuzzWord = {
      //   buzzWord: body.buzzWord,
      //   points: body.points
      // };
      buzzWordsArr.push(body);
      console.log(buzzWordsArr);
      res.json(`{Scuccess: true}`);
    } else {
      res.json(`{error: 'Cannot have more than 5 Words'}`);
    }
  })
  .put('/', (req, res) => {

    let itemIndex = buzzWordsArr.findIndex(element => element.buzzWord === req.body.buzzWord);
    console.log(itemIndex);
    if(itemIndex >= 0) {
      buzzWordsArr[itemIndex].points = req.body.points
      res.json(`{success: true}`)
    } else {
      res.json(`{error: 'BuzzWord Does Not Exist'}`)
    }
   
  })
  .delete('/', (req, res) => {
    let itemIndex = buzzWordsArr.findIndex(element => element.buzzWord === req.body.buzzWord);
    if(itemIndex >= 0) {

      buzzWordsArr.splice(itemIndex, 1) 
      res.json(`{success: true}`) 
    }else {
      res.json(`{error: 'Invalid Request'}`)
    }
  })



module.exports = router;