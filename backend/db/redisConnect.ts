import Redis = require("ioredis");
require('dotenv').config();

if (!process.env.REDIS_URL) {
  throw new Error("REDIS_URL is not defined in the environment variables");
}

export const redisClient = new Redis(process.env.REDIS_URL)

redisClient.on('connect',()=>{
  console.log("Redis Database Connected Successfully");
})

redisClient.on('error',(err:unknown)=>{
  console.log("Redis Database Connection Failed");
  console.error(err);
})