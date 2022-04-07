import { Worker } from 'bullmq';
import config from '../config/mail.config';

export const worker = new Worker(
    config.queueName,
    __dirname + '/proccessor.controller.js',
    {
        connection: config.connection,
        concurrency: config.concurrency,
    },
);
