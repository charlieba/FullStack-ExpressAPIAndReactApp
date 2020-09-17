var express = require('express');
const { json } = require('express');
const { route } = require('../app');
var router = express.Router();

router.use('/text',(req,res,next)=>{
  if(!req.body.message){
    res.send("Message not found!");
  }
  next();
})

router.post('/text',  (req,res,next) =>{
  //let jsonRequest = JSON.parse(req.body);
  const message = req.body.message;
  console.log(message)
  res.json({message:message});
});

router.use((req,res,next) =>{
  res.send("Welcome to Toolbox API");
});

module.exports = router;
