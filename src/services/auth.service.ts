import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  decodedBasicPassword(encodedUser: string): string {
    return Buffer.from(encodedUser, 'base64').toString('utf-8');
  }

  retrivePasswordBasic(encodedUser) {
    return this.decodedBasicPassword(encodedUser).split(':')[1];
  }
}
