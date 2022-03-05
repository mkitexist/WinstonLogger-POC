const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  });
  const youtubeLogger=()=>{
    return createLogger({
        level: 'debug',
        format:  combine(
            format.colorize(),
            timestamp({format:"HH:MM:SS"}),
            myFormat
          ),
          transports: [
            // new winston.transports.File({ filename: 'error.log', level: 'error' }),
            //   new winston.transports.File({ filename: 'combined.log' }),
            new transports.Console()],
        defaultMeta: { service: 'user-service' },
      
      });
      
  }
  module.exports=youtubeLogger;