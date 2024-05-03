const logger = (function () {
  let instance;

  function createInstance() {
    const loggerObject = {
      logs: [],

      log(message) {
        this.logs.push(message);
        console.log(message);
      },

      printLoggedMessages() {
        console.log(this.logs.join("\n"));
      },
    };
    return loggerObject;
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Using the Singleton logger
const singletonLogger = logger.getInstance();
singletonLogger.log("This is the first log message");
singletonLogger.log("This is the second log message");
singletonLogger.printLoggedMessages();
