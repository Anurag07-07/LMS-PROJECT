import type e = require("express");

export const catchAsyncError = (theFunc:any)=>(req:e.Request,res:e.Response,next:e.NextFunction) =>{
  Promise.resolve(theFunc(req,res,next)).catch(next)
}