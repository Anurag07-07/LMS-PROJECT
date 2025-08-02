import express = require('express');
import cookieParser = require('cookie-parser');
import cors = require('cors');
import error = require('./middlewares/error');
// import { Request, Response, NextFunction } from 'express';
export const app = express();
require('dotenv').config();

//Use Error Middleware
app.use(error.ErrorMiddleware)

// Body Parser
app.use(express.json({ limit: "50mb" }));

// Cookie Parser
app.use(cookieParser());

// Cors => Cross Origin Resource Sharing
app.use(cors({
  origin: process.env.ORIGIN || "http://localhost:3000", // Added fallback
}));


// Testing Api
// app.get('/testing', (req: Request, res: Response, next: NextFunction) => {
//   res.status(200).json({
//     status: true,
//     message: "Route Working Properly",
//   });
// });

// // Wrong Route
// app.all("*", (req: Request, res: Response, next: NextFunction) => {
//   const err = new Error(`Route ${req.originalUrl} not found`) as any;
//   err.statusCode = 404;
//   next(err);
// });