var express = require('express');
const { json } = require('express');
const { route } = require('../app');
var router = express.Router();

router.use('/text',(req,res,next)=>{
  if(!req.body.message){
    res.status(400).send("Message not found!");
  }else{
    next();
  }
})

router.post('/text',  (req,res,next) =>{
  //let jsonRequest = JSON.parse(req.body);
  const message = req.body.message;
  res.status(200).json({message:message});
});

router.use((req,res,next) =>{
  res.status(404).send("Welcome to Toolbox API - ENDPOINT NOT FOUND");
});

module.exports = router;
