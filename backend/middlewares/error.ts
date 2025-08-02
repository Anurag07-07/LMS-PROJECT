import type e = require("express");
import ErrorHandler = require("../utils/ErrorHandler");

export const ErrorMiddleware= (err:any,req:e.Request,res:e.Response,next:e.NextFunction)=>{
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error"

  //If Someone give wrong MogoDB ObjectId
  if (err.name === 'CastError') {
    let message = `Resource not found. Invalid ${err.path}`
    err = new ErrorHandler(message,400)
  }

  //If Key is Duplicated
  if (err.name === 11000) {
    let message = `Duplicate ${Object.keys(err.KeyValue)[0]} Entered`
    err = new ErrorHandler(MessageChannel,400)
  }

  //IF JWT ERRor
  if (err.name === 'JSONWebTokenError') {
    let message  = `Json Web Token is Invalid, Try Again`
    err = new ErrorHandler(message,400)
  }

  //Token Expired
  if (err.name === 'TokenExpiredError') {
    let message = `Json Web Token is Expired, Try Again`
    err = new ErrorHandler(message,400)
  }

  res.status(err.statusCode).json({
    success:false,
    message:err.message
  })
}