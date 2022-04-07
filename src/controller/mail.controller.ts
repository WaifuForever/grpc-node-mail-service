import { Job, Queue } from 'bullmq';

import { Mail } from '../interfaces/mail.interface';

import config from '../config/mail.config';
import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js/build/src/server-call';
import { MailResponse } from '../../proto/build/mails/MailResponse';
import { MailRequest } from '../../proto/build/mails/MailRequest';

const queue = new Queue<Mail>(config.queueName, {
    connection: config.connection,
});

const sendMail = async (
    call: ServerUnaryCall<MailRequest, MailResponse>,
    callback: sendUnaryData<MailResponse>) => {

    await queue.add('send-simple', {
        from: config.email,
        subject: call.request.subject || 'This is a simple test',
        text: call.request.text || 'An email sent using BullMQ',
        to: call.request.to || 'mocking@gmail.com',
    });

    console.log(`Enqueued an email sending to ${call.request.to}`);
};

export default { sendMail };
