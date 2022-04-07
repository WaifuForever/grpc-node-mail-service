import { loadPackageDefinition, Server, ServerCredentials } from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader"

import { ProtoGrpcType as MailService } from '../proto/build/mail.service';
import MailController from "./controller/mail.controller";
const PROTO_PATH = "../proto/services/mail.service.proto";


const host = process.env.HOST ? process.env.HOST : 'localhost:5000';

function getServer(): Server {
    const proto = loadPackageDefinition(
        protoLoader.loadSync('./proto/services/mail.service.proto'),
    ) as unknown as MailService;
    const server = new Server();
    server.addService(proto.sendMail.MailService.service, MailController);
    return server;
}

const server1 = getServer();

server1.bindAsync(host, ServerCredentials.createInsecure(), () => {
    server1.start();

    console.log(`server is running on ${host}`);
});
