import { Controller, Get, Request } from '@nestjs/common';
import { UserService } from '../services/user.service';

export class ValidPasswordDTO {
  valid: boolean
}

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/check-password")
  checkPassword(@Request() req): ValidPasswordDTO{
    const valid = this.userService.validatePassword(req.user);
    return { valid };
  }
}
