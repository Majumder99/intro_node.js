const EventEmitter = require("events");

const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

const logger = new Logger();

logger.on("Message", (data) => console.log("Passed", data));

logger.log("hello world");
console.log("this is me");
