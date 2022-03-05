const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  });
  const productionLogger=()=>{
    return createLogger({
        // level: 'info',
        level: 'debug',
        format:  combine(
            timestamp(),
            myFormat
          ),
          transports: [
            // new winston.transports.File({ filename: 'error.log', level: 'error' }),
            //   new winston.transports.File({ filename: 'combined.log' }),
            new transports.Console(), new transports.File({ filename: 'production.log' }),],
        defaultMeta: { service: 'user-service' },
      
      });
      
  }
  module.exports=productionLogger;