export default {
    concurrency: parseInt(process.env.QUEUE_CONCURRENCY || "1"),
    queueName: process.env.QUEUE_NAME || "mailbot",
    connection: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || "6379"),
    },
    region: process.env.AWS_DEFAULT_REGION || "us-west-2",
    email: process.env.GMAIL || "mockmail@gmail.com"
  };