//We use ErrorHandler to handle errors in our application 
// It provides a consistent way to handle errors and send appropriate responses to the client
// This is how we use OOPS in TypeScript Project

class ErrorHandler extends Error{
  statusCode:number
  constructor(message:any,statusCode:number){
    super(message)
    this.statusCode = statusCode

    // Set the prototype explicitly to maintain the correct prototype chain
    Error.captureStackTrace(this,this.constructor)
  }
}

export default ErrorHandler