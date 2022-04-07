// Original file: proto/services/mail.service.proto


export interface MailRequest {
  'to'?: (string);
  'subject'?: (string);
  'text'?: (string);
}

export interface MailRequest__Output {
  'to': (string);
  'subject': (string);
  'text': (string);
}
