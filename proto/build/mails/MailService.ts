// Original file: proto/services/mail.service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { MailRequest as _mails_MailRequest, MailRequest__Output as _mails_MailRequest__Output } from '../mails/MailRequest';

export interface MailServiceClient extends grpc.Client {
  sendMail(argument: _mails_MailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mails_MailRequest__Output>): grpc.ClientUnaryCall;
  sendMail(argument: _mails_MailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_mails_MailRequest__Output>): grpc.ClientUnaryCall;
  sendMail(argument: _mails_MailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_mails_MailRequest__Output>): grpc.ClientUnaryCall;
  sendMail(argument: _mails_MailRequest, callback: grpc.requestCallback<_mails_MailRequest__Output>): grpc.ClientUnaryCall;
  sendMail(argument: _mails_MailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_mails_MailRequest__Output>): grpc.ClientUnaryCall;
  sendMail(argument: _mails_MailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_mails_MailRequest__Output>): grpc.ClientUnaryCall;
  sendMail(argument: _mails_MailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_mails_MailRequest__Output>): grpc.ClientUnaryCall;
  sendMail(argument: _mails_MailRequest, callback: grpc.requestCallback<_mails_MailRequest__Output>): grpc.ClientUnaryCall;
  
}

export interface MailServiceHandlers extends grpc.UntypedServiceImplementation {
  sendMail: grpc.handleUnaryCall<_mails_MailRequest__Output, _mails_MailRequest>;
  
}

export interface MailServiceDefinition extends grpc.ServiceDefinition {
  sendMail: MethodDefinition<_mails_MailRequest, _mails_MailRequest, _mails_MailRequest__Output, _mails_MailRequest__Output>
}
