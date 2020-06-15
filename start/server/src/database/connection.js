import mongoose from 'mongoose';
import logger from '../logger';

import config from '../config';
import Model from './model';

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = config;

const dbUrl = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const connectDB = async () =>
  await mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      logger.info('Database successfully connected');

      return mongoose;
    })
    .catch((error) => {
      logger.error('Connection error');

      return Promise.reject(error);
    });

export default connectDB;
