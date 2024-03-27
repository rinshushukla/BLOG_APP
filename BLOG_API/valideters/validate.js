const {validationResult} =require('express-validator');

const validate = (req,res,next)=>{
 const errors =  validationResult(req);
 const mappedError = {};
 if(Object.keys(errors.errors).length===0){
  next();

 }else{
  errors.errors.map((errors)=>{
    mappedError[errors.path] = errors.message
  })
  res.status(400).json(mappedError)
 }
}
module.exports =validate;
