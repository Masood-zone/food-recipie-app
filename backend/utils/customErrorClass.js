class CustomError extends Error {
     constructor(status, message) {
          super(message); // Pass the message to the Error constructor
          this.status = status; // Set the status code
          this.name = this.constructor.name; // Set the name of the error
          Error.captureStackTrace(this, this.constructor); // Capture the stack trace
     }
}
module.exports = CustomError;
