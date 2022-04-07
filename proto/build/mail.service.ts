import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { MailServiceClient as _mails_MailServiceClient, MailServiceDefinition as _mails_MailServiceDefinition } from './mails/MailService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  sendMail: {
    MailRequest: MessageTypeDefinition
    MailResponse: MessageTypeDefinition
    MailService: SubtypeConstructor<typeof grpc.Client, _mails_MailServiceClient> & { service: _mails_MailServiceDefinition }
  }
}

