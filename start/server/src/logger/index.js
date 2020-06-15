import pino from 'pino';

const options = {
  level: process.env.LOGGER_LEVEL || 'info',
};

const logger = pino(options);

export default logger;
