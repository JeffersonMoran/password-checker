import { Injectable } from '@nestjs/common';
import { PasswordValidator } from '../utils/password-validator';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
  constructor(private readonly authService: AuthService){}

  validatePassword(encodedUser: string): boolean {
    return PasswordValidator.isValidPassword(this.authService.retrivePasswordBasic(encodedUser));
  }
}
